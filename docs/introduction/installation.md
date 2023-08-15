---
sidebar_position: 2
---

# Installation

## Quick Install

To fully integrate Automock into your testing and dependency injection (DI) frameworks, **you'll need to install two
packages:** the Automock adapter for your chosen testing framework and the corresponding DI framework adapter.

For **Jest**:

```bash
npm i -D @automock/jest
```

For **Sinon**:

```bash
npm i -D @automock/sinon
```

**And for your DI framework, choose the appropriate Automock adapter:**

For **NestJS**:

```bash
npm i -D @automock/nestjs
```

For **Inversify**:

```bash
npm i -D @automock/inversify
```

## Seamless Integration with Packages & Testing Frameworks

Automock extends its capabilities to integrate with various dependency injection (DI) frameworks, such as NestJS and
Inversify, among others. Detailed insights into Automock's adaptability across frameworks are provided on our
dedicated [Adapters](/docs/adapters/intro) page.

## A Multi-Package Approach for Flexibility

Automock adopts a multi-package structure to foster flexible integration with diverse testing frameworks. Upon
installing either `@automock/jest` or `@automock/sinon`, you'll automatically include the core logic along with
essential packages like `@automock/common`, `@automock/types`, and `@automock/core`.

The bedrock of Automock lies in the `@automock/core` package. This package contains the foundational logic that enables
the automatic mocking of class dependencies.

## Collaborating with Different Testing Frameworks

Automock has been thoughtfully designed to work harmoniously with an array of testing frameworks. This includes popular
choices like Jest and Sinon. To harness the power of Automock, it's essential to install both the core package of your
selected testing framework and the corresponding Automock adapter package. For example, when opting for Jest,
simultaneously install `@automock/jest` alongside the Jest package. Similarly, if you're using Sinon, pair the Sinon
package with `@automock/sinon`.
