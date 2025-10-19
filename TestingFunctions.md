## The whole workflow of the testing any projects by integrations test method :

- write the code of the project to be tested.
- create a test file with integration tests.
- set up Vitest and Bun and all other dependencies
- write the docker compose file to run the services required for testing.
- write the shell scripts to run the yaml file
- Now add the yaml file to the github workflows to run the tests on every push and pull request.

-----------------------------------------------------------------------------------------------

## Vitest lifecycle helpers: beforeAll and beforeEach

This document explains the common usage patterns for Vitest's `beforeAll` and `beforeEach` hooks in TypeScript with Bun as the runtime, with examples tailored to the repository's structure (for example, using the `reset-db` helper under `src/tests/helpers`).

### Quick contract
- Inputs: optional async setup/teardown functions in test files.
- Outputs: prepared test environment (server running, DB clean, seeds applied).
- Errors: throwing or rejecting inside a hook fails the test run for the affected suite.

### Common edge cases
- Hook fails/throws: tests in the same scope will be marked failed or skipped depending on timing.
- Long-running setup: declare a timeout (second parameter) or increase Vitest's global timeout when needed.
- Shared mutable state: prefer clearing or re-creating shared resources in `beforeEach` to avoid flakiness.

---

## beforeAll

Use `beforeAll` to perform expensive setup that only needs to run once per file or per `describe` block. Typical uses:
- start a server
- connect to a database
- run migrations or create heavy fixtures

Signature (TypeScript):

```ts
import { beforeAll } from 'vitest'

beforeAll((): Promise<void> | void => {
  // async setup code here
})

// or with an explicit timeout
beforeAll(async () => {
  // async setup code that might take longer
}, 10_000) // timeout in ms
```

Example — start server and connect to DB once for all tests in the file:

```ts
import { beforeAll, afterAll } from 'vitest'
import { app } from '..' // adapt import to your project

let server: ReturnType<typeof app.listen> | null = null

beforeAll(async () => {
  // If your app exposes an Express/Koa handler, listen on ephemeral port
  server = app.listen(0)
  // Optionally perform DB migrations/seeds here
})

afterAll(async () => {
  if (server) await new Promise<void>((resolve) => server!.close(() => resolve()))
})
```

Notes:
- Prefer `beforeAll` when setup is expensive and can be safely shared across tests.
- If shared state is mutated by tests, combine `beforeAll` with `beforeEach` to reset that state between tests.

---

## beforeEach

Use `beforeEach` to prepare test state that must be clean for every test. Typical uses:
- truncate tables or reset database state
- reset in-memory caches or mocks
- create fresh test fixtures

Signature (TypeScript):

```ts
import { beforeEach } from 'vitest'

beforeEach((): Promise<void> | void => {
  // reset code here
})
```

Example — clearing the database before every test using the repository helper:

```ts
import { beforeEach } from 'vitest'
import clearDb from './helpers/reset-db'

beforeEach(async () => {
  // clearDb is an async helper that deletes test records
  await clearDb()
})
```

This pattern is used in this repo's integration tests: the `src/tests/helpers/reset-db.ts` helper uses Prisma to delete test rows. Adding `await clearDb()` in `beforeEach` guarantees each test sees the same starting state.

### Local scoping with describe

You can scope hooks to `describe` blocks. Inner hooks run after outer hooks and can override behavior:

```ts
import { describe, beforeAll, beforeEach, it } from 'vitest'

beforeAll(async () => {
  // runs once for the whole file
})

beforeEach(async () => {
  // runs before every test in the whole file
})

describe('group A', () => {
  beforeEach(() => {
    // runs before every test inside `group A`; runs after the outer beforeEach
  })

  it('test in group A', () => {
    // test
  })
})
```

Order summary:
- outer beforeAll
- outer beforeEach (before each test)
- inner beforeEach
- test
- inner afterEach
- outer afterEach
- afterAll

---

## Async rules and failure modes

- Always return a Promise or mark the hook `async` when performing asynchronous work. If a hook throws or rejects, the run will fail.
- Avoid swallowing errors inside hooks; let them propagate so Vitest can report failures correctly.

## Practical notes / tips

- If starting a real server in `beforeAll`, listen on an ephemeral port (0) and use the actual URL in tests.
- Use `beforeAll` + `afterAll` to start/stop external resources and `beforeEach` to reset state between tests.
- Keep hooks fast. If a setup is slow and doesn't need to run for all tests, consider isolating slow tests into a separate file.
- Bun provides fast startup times and native TypeScript support, making test execution significantly faster than Node.js.

---

## Try it

From the `01_Integration-Testing` folder run the tests using Bun (example):

```bash
cd 01_Integration-Testing
bun test
```

or run Vitest directly with Bun:

```bash
bun vitest run
```

---

## Files referenced
- `src/tests/helpers/reset-db.ts` — example helper used in `beforeEach` to clear the database.

If you'd like, I can also add a small example test file in `src/tests` that demonstrates both hooks against the existing `sum` endpoint. Tell me if you want that created and I'll add it.
