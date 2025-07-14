all errors are handled the same
- 500 Server Error → Empty array
- Network timeout → Empty array
- Rate limiting (429) → Empty array
- Invalid JSON response → Empty array

if res.status => 429 (rate limit, 500+ server error, TypeError for network failure)

what is the rendering strategy used?
- ISR -> home page
- CSR -> favorites, login


	- cache invalidation? revalidatePth('/')


3. Memory and performance concern: With 195+ countries, you're potentially caching 195+ pages. What's your strategy for cache management at scale?

```
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const cookieKey = "auth";

export const isAuthenticatedAtom = atomWithStorage<boolean>(cookieKey, false);

// Check server auth status and sync with client state
export const initAuthAtom = atom(
  null,
  async (get, set) => {
    try {
      const response = await fetch("/api/auth/status");
      const { authenticated } = await response.json();
      set(isAuthenticatedAtom, authenticated);
      return authenticated;
    } catch (error) {
      console.error("Auth check failed:", error);
      set(isAuthenticatedAtom, false);
      return false;
    }
  }
);

// sync cookie on login/logout
// derived atom
export const syncAuthCookieAtom = atom(
  null,
  async (get, set, value: boolean) => {
    set(isAuthenticatedAtom, value);

    if (!value) {
      try {
        await fetch("/api/auth/logout", { method: "POST" });
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  }
);
```

```
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  const isAuthenticated = authCookie?.value === "true";
  
  return NextResponse.json({ authenticated: isAuthenticated });
}
```


 If this app needed to scale to support 10,000+ countries, what would you change in your architecture?
 - tiered cache (according to priority of the country)
 - virtual lists
 - api pagination
 - search first interface


```
import { cache } from "react";

// Proper error types for different scenarios
export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

// Retry logic with exponential backoff
async function fetchWithRetry(url: string, options: RequestInit, maxRetries = 3): Promise<Response> {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(10000), // 10 second timeout
      });
      
      if (response.ok) return response;
      
      // Don't retry on 4xx errors (client errors)
      if (response.status >= 400 && response.status < 500) {
        throw new APIError(response.status, `API Error: ${response.status}`);
      }
      
      // Retry on 5xx errors
      if (i === maxRetries) {
        throw new APIError(response.status, `API Error after ${maxRetries} retries: ${response.status}`);
      }
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      
    } catch (error) {
      if (error instanceof APIError) throw error;
      
      if (i === maxRetries) {
        throw new NetworkError(`Network error after ${maxRetries} retries: ${error.message}`);
      }
      
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
  
  throw new NetworkError('Max retries exceeded');
}

export const fetchCountries = cache(async () => {
  try {
    const res = await fetchWithRetry(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2",
      {
        next: { revalidate: 86400 }, // 24 hours in seconds
      }
    );
    return res.json();
  } catch (error) {
    console.error('Failed to fetch countries:', error);
    // Re-throw to let components handle the error appropriately
    throw error;
  }
});

export const fetchCountryByCode = cache(async (code: string) => {
  try {
    const res = await fetchWithRetry(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca2`,
      {
        next: { revalidate: 86400 },
      }
    );

    const data = await res.json();
    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error("Error fetching country by code:", error);
    throw error;
  }
});

// ... rest of the functions with similar error handling

```


If you wanted to optimize this architecture while maintaining your "fav-country-codes-only storage" approach, what would you do?
Consider these options:
1. Move favorites to server component with searchParams for codes
2. Create separate client-side data fetching functions without ISR config
3. Implement client-side caching (React Query, SWR) to match server-side behavior
4. Use Next.js API routes as a proxy to leverage server-side caching