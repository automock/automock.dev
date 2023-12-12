---
sidebar_position: 1
---

import HomepageFeatures from "../../src/components/HomepageFeatures";

# Introduction

**Automock optimizes the unit testing process within dependency injection frameworks by providing a virtual, isolated
environment and automated mock generation, enabling developers to create efficient test suites and enhance their
overall testing experience.**

<HomepageFeatures />

## Automock and Unit Testing

Software development essentials like unit testing are sometimes disputed, especially when it comes to what is and isn't
unit testing. Unit testing within the framework of Automock is consistent with the idea of "Solitary Unit Tests," a term
that was coined by Jay Fields and found in writings by Martin Fowler. In order to maintain code integrity, solitary
tests place a strong emphasis on isolating each unit during testing and ensuring independent validation of code
behavior.

In particular, Automock streamlines the unit testing process by automating the creation of mock objects, thereby
addressing the challenges associated with it. Important advantages of Automock for unit testing consist of:

- Automatic creation of mock objects for class dependencies, which drastically cuts down on setup time and complexity.

- Make test suites more consistent and manageable by enforcing standard syntax across frameworks.

- Uses virtual DI containers to expedite the testing process, which is important in Continuous Integration (CI)
  pipelines because tests should run quickly enough to not deter repeated execution.

## Embracing a Spectrum of Testing and DI Frameworks

Automock works with a variety of testing and DI frameworks. It currently supports Jest and Sinon, with adapters for
NestJS, InversifyJS, and TSyringe in the works. The goal is to provide a standardized testing experience across
frameworks and testing libraries.

| **DI Framework Adapter**                               | **Jest (`@automock/jest`)** | **Sinon (`@automock/sinon`)** |
|--------------------------------------------------------|-----------------------------|-------------------------------|
| **NestJS Adapter (`@automock/adapters.nestjs`)**       | :white_check_mark:          | :white_check_mark:            |
| **Inversify Adapter (`@automock/adapters.inversify`)** | :white_check_mark: (Beta)   | :white_check_mark: (Beta)     |
| **TSyringe Adapter (`@automock/adapters.tsyringe`)**   | **Soon**                    | **Soon**                      |

:::info
Automock is a community-driven project, and we're always looking to expand our horizons and provide
support for a wider range of Dependency Injection frameworks.
If you're interested in contributing to Automock's
adapters, see
the [contributing](https://automock.dev/docs/adapters/intro#seeking-contributors-for-di-framework-integrations) section
for more details.
:::