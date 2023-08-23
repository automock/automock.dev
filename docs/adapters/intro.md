---
sidebar_position: 1
---

# Introduction

## Adapters: Bridging Frameworks and Dependency Injection

Automock's core strength lies in its consistent logic and approach to automating mock object creation. However, the
diverse landscape of Dependency Injection (DI) frameworks, each with its unique intricacies, presents a challenge. To
address this, Automock introduces the concept of "Adapters."

Automock Adapters are tailored connectors designed specifically for different DI frameworks. They ensure seamless
integration, optimal performance, and a harmonized testing experience across various contexts. Whether it's the nuances
in how dependencies are registered, the methods of resolution, or the specific annotations and decorators unique to a
framework, Automock Adapters adeptly handle these details.

Through these Adapters, Automock can seamlessly integrate with a variety of testing and DI frameworks. They empower
developers by offering a consistent, simplified testing experience, regardless of the underlying framework, ensuring
that automatic mocking and dependency injection capabilities are always at their fingertips.

### Supported DI Frameworks

| **DI Framework Adapter**                               | **Jest (`@automock/jest`)**     | **Sinon (`@automock/sinon`)** |
|--------------------------------------------------------|---------------------------------|-------------------------------|
| **NestJS Adapter (`@automock/adapters.nestjs`)**       | :white_check_mark:              | :white_check_mark:            |
| **Inversify Adapter (`@automock/adapters.inversify`)** | :white_check_mark:              | :white_check_mark:            |
| **Ts.ED Adapter (`@automock/adapters.tsed`)**          | Soon                            | Soon                          |
| **TypeDI Adapter (`@automock/adapters.typedi`)**       | Soon                            | Soon                          |
