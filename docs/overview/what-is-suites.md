---
sidebar_position: 2
title: What is Suites?
description: What is Suites?
toc_min_heading_level: 2
---

Suites is an opinionated, flexible [testing meta-framework](/docs/overview/meta-framework) aim at elevating the software testing experience within
backend systems. By integrating a wide array of testing tools into a cohesive framework, Suites simplifies the process
of creating reliable tests, thereby ensuring the development of high-quality software.
[Originating from the solid foundation laid by Automock](/docs/overview/the-shift-from-automock), Suites has evolved into a more comprehensive solution,
aimed at addressing a broader range of testing challenges.

Currently, Suites shines in enhancing **unit testing within dependency injection frameworks** such as NestJS, TSyringe,
and InversifyJS. It offers a streamlined and opinionated approach to crafting reliable unit tests. However, Suites'
vision extends far beyond the realm of DI-centric unit testing (Read more under About Suites).

## Prerequisites

Suites expects you to:
  - Be familiar with [TypeScript](https://www.typescriptlang.org/)
  - Be familiar with [basic testing principles / practices](/docs)
  - Use [dependency injection framework in your code](/docs)

However, if you are not familiar with testing practices, refer to our [Testing Fundamentals](/docs/testing-fundamentals)
section.

## Supported Technologies

Suites supports a broad spectrum of DI frameworks and testing libraries, including but not limited to:

- **Dependency Injection Frameworks**: NestJS, InversifyJS and TSyringe
- **Mocking Libraries**: Jest, Sinon, Vitest, and Bun