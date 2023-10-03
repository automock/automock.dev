---
sidebar_position: 1
---

# Introduction

**Specially designed for Inversion of Control and Dependency Injection scenarios, Automock seamlessly integrates 
automatic mocking into various DI and testing frameworks. Automock's adaptability ensures a seamless and
effective testing experience, empowers you to isolate and test individual components with ease, enhancing the efficiency
and reliability of your unit testing journey.**

* 🚀 **Zero-Setup Mocking** - Dive straight into testing without the hassle. Automatically generate mock
   objects, eliminate manual setup and reduce boilerplate code.

* 🔍 **Type-Safe Mocks** - Leverage TypeScript's power with mocks that retain the same type information as real objects.
   Write tests with confidence, knowing that type mismatches will be caught.

* 🔄 **Consistent Test Architecture** - Achieve a uniform approach to unit testing.
  Your tests will follow a consistent syntax and structure, making them easier to read and maintain.

* 📈 **Optimized Performance** - Lightning-fast execution for all your unit tests. Automock's lightweight design
  ensures that your tests run smoothly and efficiently.

* 🌐 **Community & Support** - Join a growing community of developers. Benefit from regular updates, comprehensive
   documentation, and responsive support to ensure you get the most out of Automock.

## Automock and The Essence of Unit Testing

Unit tests are pivotal in upholding code integrity and warding off potential issues. These tests frequently require the
mocking of dependencies to pinpoint and evaluate the behavior of distinct components. However, the manual orchestration
and management of these mock objects can be tedious, prone to mistakes, and quite challenging.

Automock is designed to streamline unit testing by automating the generation of mock objects for class dependencies.
With its seamless integration capabilities with renowned testing frameworks and dependency injection (DI) containers,
crafting reliable unit tests becomes a breeze, eliminating the intricacies of manual mock configurations. **With
Automock, you can:**

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

**Automock introduces a paradigm shift. Instead of relying on the actual DI container, Automock creates a virtual
environment where dependencies are automatically mocked.**

## Embracing a Spectrum of Testing and DI Frameworks

| **DI Framework Adapter**                               | **Jest (`@automock/jest`)**   | **Sinon (`@automock/sinon`)** |
|--------------------------------------------------------|-------------------------------|-------------------------------|
| **NestJS Adapter (`@automock/adapters.nestjs`)**       | :white_check_mark:            | :white_check_mark:            |
| **Inversify Adapter (`@automock/adapters.inversify`)** | :white_check_mark: (Beta)     | :white_check_mark: (Beta)     |

> :bulb: Automock is a community-driven project, and we're always looking to expand our horizons and provide
> support for a wider range of Dependency Injection frameworks.
> If you're interested in contributing to Automock's
> adapters, see the [contributing](https://automock.dev/docs/adapters/intro#seeking-contributors-for-di-framework-integrations) section for more details.