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

Automock improves upon the existing unit testing procedures of DI frameworks by creating a virtual DI container. There
is an array of advantages to this change:

* **Speed:** By simulating the actual DI container in the testing environment, Automock speeds up execution times.

* **Efficiency:** Developers are therefore able to focus on writing the test logic instead of grappling with the
  complexities of test setup.

* **Isolation:** Each test runs independently with mock implementations automatically provided, creating a
  streamlined and interference-free testing environment.

:::info
**A frequently asked question is, "Does Automock work with the built-in unit testing tools in my framework?" The answer is
that you no longer rely on the native testing tools of your DI framework. Instead, Automock's virtual environment takes
precedence.**
:::