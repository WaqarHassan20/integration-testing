# 🧪 Mock Functions, Mock Resolved Values, and Spies in Testing (JavaScript/TypeScript)

Testing in JavaScript or TypeScript often involves **mocking** and **spying** to control or observe how functions behave without depending on real implementations such as databases, APIs, or external modules.

---

## 1. Mock Functions

A **mock function** is a fake version of a real function that is created for testing purposes.  
It allows you to **simulate** how a function behaves without actually executing its real code.

Mock functions record:
- How many times they were called  
- What arguments they received  
- What values they returned  

You can also make them return any value you want, which helps you test your logic in isolation.

### Example Concept:
Imagine your code depends on a database function `getUserFromDB()`.  
During testing, you don’t want to connect to a real database.  
So, you create a mock function that **pretends** to be `getUserFromDB()` and returns a fake user.

### Key Points:
- They are created using libraries like `vi.fn()` (Vitest) or `jest.fn()` (Jest).  
- They help in **unit testing**, where you test only one small part of your program at a time.  
- They do **not execute the original function**.

---

## 2. Mock Resolved Values

When you are testing asynchronous functions that return promises (like API calls or database queries),  
you can use **mock resolved values** to make them return controlled results.

A mock resolved value means that the mock function automatically **resolves a promise** with a specific result.  
This lets you test the async code’s response **without waiting for real network or database operations**.

### Example Concept:
If you have an async function that fetches user data from an API,  
you can mock it using `.mockResolvedValue({ name: "Ali" })`,  
so your test will always receive `{ name: "Ali" }` as the result instantly.

### Key Points:
- Used for mocking **async or promise-based functions**.  
- Commonly written as `.mockResolvedValue(value)` or `.mockRejectedValue(error)`.  
- Saves time and avoids using real APIs or databases.  

---

## 3. Spies

A **spy** is a tool used to observe what happens when a real function runs.  
Unlike mocks, a spy **does not replace** the original function — it watches it.  
You can check if the function was called, what arguments it received, and what it returned.

You can also temporarily modify the behavior of the spied function if needed,  
and then **restore** it to its original form after the test.

### Example Concept:
If you have a `calculateTotal()` function that internally calls `add()`,  
you can spy on `add()` to see how many times it was called and with which numbers.  
The real function `add()` will still execute normally.

### Key Points:
- Created using `vi.spyOn(object, "functionName")`.  
- It tracks function calls without replacing the real implementation (unless mocked).  
- Useful for **verifying internal behavior** without faking logic.  

---

## 4. Difference Between Mock and Spy

| Feature | Mock Function | Spy |
|----------|----------------|-----|
| Executes Real Function? | ❌ No | ✅ Yes (by default) |
| Purpose | To replace a function | To observe a function |
| Can Control Return Value? | ✅ Yes | ✅ Yes (optional) |
| Common Usage | Testing in isolation | Monitoring internal calls |

---

## 5. Why These Concepts Are Important

Mocking and spying are essential because they:
- Make tests **faster** and **more reliable**.  
- Allow testing without real dependencies like APIs, files, or databases.  
- Help in identifying **which functions were called and why**.  
- Prevent unwanted side effects (like writing to a real database).  

---

## 6. Summary

- **Mock Function:** A fake function used to replace real ones in tests.  
- **Mock Resolved Value:** A fake async return for a mock function to simulate promise results.  
- **Spy:** A watcher that observes real function behavior without replacing it.  
