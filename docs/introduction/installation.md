---
sidebar_position: 2
---

# Installation

## Quick Install

To fully integrate Automock into your testing and dependency injection (DI) frameworks, **you'll need to install two
packages: the Automock adapter for your chosen testing framework and the corresponding DI framework adapter.**

| DI Framework Adapter | Jest (`@automock/jest`) | Sinon (`@automock/sinon`) |
|----------------------|-------------------------|---------------------------|
| NestJS               | :white_check_mark:      | :white_check_mark:        |
| Inversify            | :white_check_mark:      | :white_check_mark:        |

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
npm i -D @automock/adapters.nestjs
```

For **Inversify**:

```bash
npm i -D @automock/adapters.inversify
```

## Collaborating with Different Testing Frameworks

Automock has been designed to work with an array of testing frameworks. This includes popular choices like Jest and
Sinon. It's essential to install both the core package of your selected testing framework and the corresponding Automock
adapter package. For example, when opting for Jest, simultaneously install `@automock/jest` alongside the Jest package.
Similarly, if you're using Sinon, pair the Sinon package with `@automock/sinon`.

## Seamless Integration with Different DI Frameworks

Automock extends its capabilities to integrate with various dependency injection (DI) frameworks, such as NestJS and
Inversify, among others. Detailed insights into Automock's adaptability across frameworks are provided on our
dedicated [Adapters](/docs/adapters/intro) page.
