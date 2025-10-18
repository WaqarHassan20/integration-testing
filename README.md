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
