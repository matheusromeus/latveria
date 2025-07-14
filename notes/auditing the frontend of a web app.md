
- 15mb public folder - can move to a CDN.
- custom 404 error page
- images need to be optimized
- build errors
- no auth?
- loading state spinners - render initial ui and then add loading where the data comes
- everything is client side rendering - because of 'use client' in `layout.js`
- is this supposed to be responsive for mobiles and tabs? not responsive
- package vulnerabilities
- ui doesn't look that great, you can put the invoices in the center,  a lot of wasted white space
- table titles have poor contrast
- check if any env variables are leaked
- group the form fields together
- Payment Details
	•	Amount & Token (on the same line for compactness, if space allows)
	•	Network (related to token, so keep it close)

Payment Deadline
	•	Final Payment Date
	•	Description (Optional) (as this is less critical and doesn’t affect functionality)

Recipient Information
	•	Receiver’s Wallet Address
	•	Receiver’s Name

Payment Configuration
	•	Payment Type




### **4. Check for Memory Leaks**

1. **Heap Snapshots**:
    
    - Go to the **Memory** tab in DevTools.
    - Take a snapshot:
        - Perform typical interactions.
        - Take a **heap snapshot** before and after the actions.
    - Compare the snapshots:
        - Look for growing detached DOM nodes or large memory usage that persists.
2. **Garbage Collection**:
    
    - Force a GC run by clicking **Collect Garbage** in the Memory tab.
    - Observe if memory usage decreases as expected.
3. **Timeline Analysis**:
    
    - In the Performance tab, record long interactions.
    - Look for continuous memory growth without release, which indicates leaks.