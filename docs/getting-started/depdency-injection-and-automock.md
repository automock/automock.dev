---
sidebar_position: 3
title: Dependency Injection & Automock
---

# Dependency Injection and Automock

## The Challenge of Testing with Traditional DI

Dependency Injection (DI) is a fundamental design pattern in modern software architecture, enhancing modularity and
testability by adhering to inversion of control principles. However, traditional DI practices during unit testing can
introduce several challenges:

* **Complexity:** Mastery of a framework's DI container intricacies is often required, adding complexity to test setups.

* **Maintenance Overhead:** The burden of maintaining alignment between stubs, mocks, and their real counterparts
  increases with application growth.

* **Performance:** The actual DI container can introduce latency, especially when it's responsible for additional tasks
  such as lifecycle management or module initialization.

## Automock's Approach

Automock redefines unit testing by introducing a virtual DI container that supersedes the native testing mechanisms of
DI frameworks. This shift offers a suite of benefits:

* **Speed:** Automock's virtual DI container accelerates test execution by eliminating the need to load the actual DI
  container.

* **Simplicity:** The complexity of test preparation is significantly reduced, freeing developers to concentrate on
  crafting the test logic itself.

* **Isolation:** Each test is conducted in isolation with automatic provision of mock implementations, ensuring a
  focused and interference-free testing environment.

:::info
**Important note!
You no longer rely on your framework's native unit testing tools. Instead, Automock's virtual 
environment takes precedence.**
:::
