<div align="center">

# 🧪 Integration & End-to-End Testing

### Modern Testing Framework with Vitest, Prisma, and Supertest

[![CI/CD Pipeline](https://github.com/WaqarHassan20/integration-and-end-to-end-testing/actions/workflows/test.yaml/badge.svg)](https://github.com/WaqarHassan20/integration-and-end-to-end-testing/actions/workflows/test.yaml)
[![Bun](https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)

[Features](#-features) • [Quick Start](#-quick-start) • [Testing](#-testing) • [CI/CD](#-cicd-pipeline) • [Project Structure](#-project-structure)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Testing](#-testing)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

A comprehensive testing repository demonstrating **Integration Testing** and **End-to-End Testing** practices using modern JavaScript/TypeScript tools. This project showcases best practices for testing Express.js APIs with database interactions, mocking strategies, and automated CI/CD workflows.

Perfect for developers looking to learn or implement robust testing strategies in their Node.js/Bun projects!

---

## ✨ Features

- 🚀 **Blazing Fast** - Powered by [Bun](https://bun.sh) runtime
- 🧪 **Vitest** - Modern, fast, and feature-rich testing framework
- 🎭 **Mocking** - Advanced mocking with `vitest-mock-extended`
- 🌐 **HTTP Testing** - API testing with Supertest
- 🗄️ **Database** - Prisma ORM for type-safe database operations
- 🔄 **CI/CD** - Automated testing with GitHub Actions
- 📝 **TypeScript** - Full type safety and excellent DX
- 🎨 **Express.js** - RESTful API implementation

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| 🟡 **Bun** | Fast JavaScript runtime and package manager |
| 🧪 **Vitest** | Modern testing framework with Vite integration |
| 🔷 **Prisma** | Next-generation ORM for type-safe database access |
| 🔵 **TypeScript** | Typed superset of JavaScript |
| ⚡ **Express** | Fast, minimalist web framework |
| 🎭 **Supertest** | HTTP assertion library for API testing |

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `bun` | Latest | JavaScript runtime & package manager |
| `vitest` | ^3.2.4 | Testing framework |
| `supertest` | ^7.1.4 | HTTP assertion library |
| `prisma` | ^6.17.1 | Database ORM |
| `express` | ^5.1.0 | Web framework |
| `vitest-mock-extended` | ^3.1.0 | Advanced mocking utilities |

---

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) v1.0 or higher
- Git
- A database (PostgreSQL, MySQL, or SQLite)

### Installation

```bash
# Clone the repository
git clone https://github.com/WaqarHassan20/integration-and-end-to-end-testing.git

# Navigate to the project
cd integration-and-end-to-end-testing

# Navigate to integration testing folder
cd 01_Integration-testing

# Install dependencies
bun install

# Generate Prisma Client
bunx prisma generate

# Set up your database (update .env with your DATABASE_URL)
bunx prisma migrate dev

# Run the application
bun run start
```

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test --watch

# Run tests with coverage
bun run test --coverage

# Run tests in UI mode
bun run test --ui
```

### Test Structure

```
01_Integration-testing/
├── src/
│   ├── test/
│   │   └── sum.test.ts          # Integration tests
│   ├── __mocks__/
│   │   └── db.ts                # Database mocks
│   └── utils/
│       └── user/
│           └── __mocks__/       # User utility mocks
```

### Example Test

```typescript
import { describe, it, expect, vi } from "vitest";
import { prismaClient } from "../__mocks__/db";
import request from "supertest";
import { app } from "..";

vi.mock("../db");

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    prismaClient.sum.create.mockResolvedValue({
      id: 12,
      a: 5,
      b: 7,
      answer: 12,
      type: "sum",
    });

    const response = await request(app)
      .post("/sum")
      .send({ a: 5, b: 7 });

    expect(response.status).toBe(200);
    expect(response.body.answer).toBe(12);
  });
});
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

Our CI/CD pipeline automatically runs on every pull request to `main`:

```yaml
on:
  pull_request:
    branches:
      - main
```

### Pipeline Steps

1. ✅ **Checkout Code** - Gets the latest code
2. ✅ **Setup Bun** - Installs Bun runtime
3. ✅ **Install Dependencies** - Runs `bun install`
4. ✅ **Generate Prisma Client** - Creates database types
5. ✅ **Run Tests** - Executes all Vitest tests with coverage

### Status Badge

[![CI/CD Pipeline](https://github.com/WaqarHassan20/integration-and-end-to-end-testing/actions/workflows/test.yaml/badge.svg)](https://github.com/WaqarHassan20/integration-and-end-to-end-testing/actions/workflows/test.yaml)

---

## 📁 Project Structure

```
integration-and-end-to-end-testing/
├── .github/
│   └── workflows/
│       └── test.yaml              # CI/CD pipeline configuration
├── 01_Integration-testing/
│   ├── prisma/
│   │   └── schema.prisma          # Database schema
│   ├── src/
│   │   ├── __mocks__/             # Mock implementations
│   │   ├── generated/             # Prisma generated files
│   │   ├── test/                  # Test files
│   │   ├── utils/                 # Utility functions
│   │   ├── app.ts                 # Express app setup
│   │   ├── db.ts                  # Database connection
│   │   └── index.ts               # Entry point
│   ├── package.json
│   └── tsconfig.json
├── 02_End-to-End-testing/         # E2E testing (coming soon)
└── README.md
```

---

## 🎯 Testing Best Practices

### ✅ What We Cover

- **Unit Tests** - Testing individual functions in isolation
- **Integration Tests** - Testing API endpoints with database interactions
- **Mocking** - Isolating tests from external dependencies
- **HTTP Testing** - Testing REST API responses and status codes
- **Database Testing** - Testing Prisma queries and mutations

### 🔍 Key Concepts Demonstrated

1. **Database Mocking** - Using `vitest-mock-extended` to mock Prisma Client
2. **HTTP Assertions** - Using Supertest for API testing
3. **Async Testing** - Handling promises and async operations
4. **Test Organization** - Structuring tests with `describe` and `it` blocks
5. **CI/CD Integration** - Automated testing on every PR

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🔧 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🎉 Open a Pull Request

### Development Workflow

```bash
# Create a new branch
git checkout -b feature/my-feature

# Make your changes and test
bun run test

# Commit with conventional commits
git commit -m "feat: add new testing feature"

# Push and create PR
git push origin feature/my-feature
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Waqar Hassan**

- GitHub: [@WaqarHassan20](https://github.com/WaqarHassan20)
- Repository: [integration-and-end-to-end-testing](https://github.com/WaqarHassan20/integration-and-end-to-end-testing)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you learn testing!

---

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [Bun Documentation](https://bun.sh/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Supertest Documentation](https://github.com/ladjs/supertest)
- [Express.js Documentation](https://expressjs.com/)

---

<div align="center">

Made with ❤️ and ☕ by Waqar Hassan

**[⬆ back to top](#-integration--end-to-end-testing)**

</div>
