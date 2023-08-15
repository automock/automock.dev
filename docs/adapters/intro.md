---
sidebar_position: 1
---

# Introduction

## Adapters: Bridging Frameworks and Dependency Injection

Automock seamlessly integrates with a variety of testing frameworks and dependency injection (DI) frameworks through the
concept of "Adapters." These Adapters serve as connectors, enabling Automock to work harmoniously within different
contexts and frameworks, providing automatic mocking and dependency injection capabilities for your unit tests.

### Integration with Dependency Injection Frameworks

Automock's adaptability extends to dependency injection frameworks, such as NestJS, Inversify, and more. Each framework
demands a distinct integration approach to resolve dependency references. Nonetheless, the Automock API remains uniform,
allowing you to employ consistent methods and patterns regardless of the framework in use.

### Unified API, Varied Functionality

Automock offers a unified API while seamlessly adjusting to the intricacies of different frameworks. Fundamental
methods, such as `UnitReference` `.get()` and `MockOverride` `.mock()`, retain their consistency across frameworks.
However, the outcome of these methods might differ based on the underlying testing or DI framework.
