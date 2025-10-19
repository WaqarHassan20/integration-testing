<div align="center">

# 🧪 Integration Testing with Vitest & Prisma

### Express.js API Integration Testing using Bun, Vitest, Supertest & Mocks

[![CI/CD Pipeline](https://github.com/WaqarHassan20/integration-and-end-to-end-testing/actions/workflows/test.yaml/badge.svg)](https://github.com/WaqarHassan20/integration-and-end-to-end-testing/actions/workflows/test.yaml)
[![Bun](https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)

</div>

---

## 📖 About

This project demonstrates **Integration Testing** best practices for Express.js APIs with Prisma database operations. Learn how to test API endpoints with mocked database interactions using Vitest, Supertest, and vitest-mock-extended.

**Perfect for:** Developers learning integration testing patterns in TypeScript/JavaScript applications.

---

## ✨ Key Features

- 🧪 **Vitest** - Fast, modern testing framework
- 🎭 **Database Mocking** - Mock Prisma Client with `vitest-mock-extended`
- 🌐 **HTTP Testing** - Test APIs with Supertest
- � **Bun Runtime** - Lightning-fast JavaScript runtime
- 🔄 **CI/CD** - Automated testing on every PR
- 📝 **TypeScript** - Full type safety

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| 🟡 **Bun** | JavaScript runtime & package manager |
| 🧪 **Vitest** | Testing framework |
| 🔷 **Prisma** | Database ORM |
| 🔵 **TypeScript** | Type-safe development |
| ⚡ **Express** | Web framework |
| 🎭 **Supertest** | HTTP testing |
| 🃏 **vitest-mock-extended** | Advanced mocking |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/WaqarHassan20/integration-and-end-to-end-testing.git
cd integration-and-end-to-end-testing/01_Integration-testing

# Install dependencies
bun install

# Generate Prisma Client
bunx prisma generate

# Run tests
bun run test

# Run tests with coverage
bun run test --coverage

# change mode of all sh files to executable
chmod +x /scripts/.sh/*

# then run the setup script
./scripts/.run-integrations.sh

```

---

## 🧪 Integration Testing

### What is Integration Testing?

Integration testing verifies that different parts of your application work together correctly. In this project, we test:
- API endpoints (Express routes)
- Database operations (Prisma queries)
- Request/Response handling
- Business logic integration

## 🎯 Testing Concepts Covered

| Concept | Description |
|---------|-------------|
| **Mocking** | Mock Prisma Client to isolate tests from database |
| **HTTP Testing** | Test API endpoints with Supertest |
| **Async/Await** | Handle asynchronous operations in tests |
| **Test Organization** | Structure tests with `describe` and `it` |
| **CI/CD Integration** | Automate testing with GitHub Actions |

---

## 📚 Learn More

- [Vitest Documentation](https://vitest.dev/)
- [Bun Documentation](https://bun.sh/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Supertest Guide](https://github.com/ladjs/supertest)

---

## 👨‍💻 Author

**Waqar Hassan**
- GitHub: [@WaqarHassan20](https://github.com/WaqarHassan20)

---

## 🌟 Support

Give a ⭐️ if you found this helpful!

---

<div align="center">

Made with ❤️ by Waqar Hassan

</div>
