
so if you pass cookies onto fetch() in server components, you have to check with auth.
Validate cookies on every request (e.g. decode JWT, check sessions).

when you do a db call, how are you verifying that it is an authenticated user?
```
// middleware/auth.ts
import { getUserFromSession } from '@/lib/auth'

export async function requireAuth(req: NextRequest) {
  const session = req.cookies.get('session')?.value;
  const user = await getUserFromSession(session);

  if (!user) {
    throw new Error('Unauthorized');
  }

  return user;
}

// In route handler
const user = await requireAuth(req);
const dbUser = await db.user.findUnique({ where: { id: user.id } });
```

how can incoming request data be sanitized?

Never just return raw DB models—create DTOs (Data Transfer Objects).
