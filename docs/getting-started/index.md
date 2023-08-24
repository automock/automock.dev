---
sidebar_position: 1
---

# Introduction

**Specially designed for Inversion of Control (IoC) and Dependency Injection (DI) scenarios, Automock seamlessly
integrates automatic mocking into various DI and testing frameworks. Automock's adaptability ensures a seamless and
effective testing experience, empowers you to isolate and test individual components with ease, enhancing the efficiency
and reliability of your unit testing journey.**

## Automock and The Essence of Unit Testing

Unit tests are pivotal in upholding code integrity and warding off potential issues. These tests frequently require the
mocking of dependencies to pinpoint and evaluate the behavior of distinct components. However, the manual orchestration
and management of these mock objects can be tedious, prone to mistakes, and quite challenging.

Automock is designed to streamline unit testing by automating the generation of mock objects for class dependencies.
With its seamless integration capabilities with renowned testing frameworks and dependency injection (DI) containers,
crafting reliable unit tests becomes a breeze, eliminating the intricacies of manual mock configurations. **With
Automock, you can:**

- Instantly produce mock objects tailored for class dependencies.
- Channel your efforts into crafting impactful test scenarios rather than getting bogged down with mock configurations.
- Maintain a uniform syntax and structure throughout your unit tests.
- Utilize type-accurate mocks that mirror the type attributes of genuine objects, bolstering code sustainability.

## The Challenge of Traditional Dependency Injection

Dependency Injection (DI) is a powerful design pattern that promotes inversion of control, making software architectures
more modular and testable. In many frameworks, the DI container (or IoC container) is responsible for resolving
dependencies. When unit testing, developers often need to interact with this container, replacing real implementations
with stubs or mocks to isolate the unit of work. This traditional approach has its challenges:

* **Complexity:** Interacting with the DI container often requires a deep understanding of the framework's internals,
  setting up tests can become complex.

* **Maintenance Overhead:** As the application grows, maintaining these stubs and ensuring they align with the actual
  implementations can become tedious.

* **Performance:** Interacting with the real DI container can introduce unnecessary overhead in tests, especially when
  the container performs additional tasks like lifecycle management or module initialization.

## The Automock Advantage

Automock introduces a paradigm shift. Instead of relying on the actual DI container, Automock creates a virtual
environment where dependencies are automatically mocked. This approach offers several advantages:

* **Simplicity:** There's no need to manually set up the DI container or replace dependencies with stubs. Automock
  handles this automatically, making test setups straightforward and concise.

* **Isolation:** Since Automock doesn't communicate with the real DI container, tests are truly isolated. This ensures
  that external factors or changes in the DI container's behavior don't inadvertently affect your tests.

* **Performance:** Without the overhead of the actual DI container, tests run faster and more efficiently.

## Embracing a Spectrum of Testing and DI Frameworks

| **DI Framework Adapter**                               | **Jest (`@automock/jest`)** | **Sinon (`@automock/sinon`)** |
|--------------------------------------------------------|-----------------------------|-------------------------------|
| **NestJS Adapter (`@automock/adapters.nestjs`)**       | :white_check_mark:          | :white_check_mark:            |
| **Inversify Adapter (`@automock/adapters.inversify`)** | :white_check_mark: (Beta)   | :white_check_mark: (Beta)     |
| **Ts.ED Adapter (`@automock/adapters.tsed`)**          | Soon                        | Soon                          |
| **TypeDI Adapter (`@automock/adapters.typedi`)**       | Soon                        | Soon                          |
