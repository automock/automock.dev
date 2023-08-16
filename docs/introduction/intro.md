---
sidebar_position: 1
---

# What is Automock?

### The Challenge of Unit Testing

Writing comprehensive and effective unit tests is crucial for maintaining code quality and preventing regressions.
However, when dealing with complex applications, unit tests often involve mocking dependencies to isolate the behavior
of individual components. Manually creating and managing mock objects can become time-consuming, error-prone, and
cumbersome.

### What Automock Solves

Automock aims to alleviate the challenges of unit testing by automating the process of creating mock objects for class
dependencies. It seamlessly integrates with popular testing frameworks and dependency injection (DI) containers, making
it easy to write reliable unit tests without the hassle of manual mock setup. **With Automock, you can:**

- Automatically generate mock objects for class dependencies.
- Focus on writing meaningful test cases instead of spending time on mock setup.
- Achieve consistent syntax and test structure across your unit tests.
- Leverage type-safe mocks that retain the same type information as real objects, ensuring code maintainability.

### Diversity of Testing Frameworks and DI

Automock is built to accommodate a diverse landscape of testing frameworks and dependency injection (DI) systems.
Whether you're a fan of **Jest**, prefer **Sinon**, or opt for other testing libraries, Automock remains adaptable and
effective.

In addition to its compatibility with various testing frameworks, Automock seamlessly integrates with different
dependency injection frameworks. From **NestJS** to **Inversify**, Automock empowers you to test with the DI setup that
best suits your project. Learn more about the supported testing frameworks in the [Framework Integrations](/docs/adapters/intro)
section.

Whether you're combining different testing doubles libraries with various DI frameworks or exploring Automock's features
within your preferred testing ecosystem, this documentation is your gateway to understanding and harnessing Automock's
capabilities.

| DI Framework Adapter                               | Jest (`@automock/jest`) | Sinon (`@automock/sinon`) |
|----------------------------------------------------|-------------------------|---------------------------|
| NestJS Adapter (`@automock/adapters.nestjs`)       | :white_check_mark:      | :white_check_mark:        |
| Inversify Adapter (`@automock/adapters.inversify`) | :white_check_mark:      | :white_check_mark:        |