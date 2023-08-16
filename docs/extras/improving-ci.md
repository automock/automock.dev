---
sidebar_position: 4
title: Improving CI Pipeline
---

# Improving Continuous Integration Pipeline

**Automock can greatly enhance your CI pipeline. Since it automatically mocks all class dependencies, you can
confidently assume that your unit tests are executed in complete isolation, creating a solitary unit testing
environment.**

We recommend naming your test files with a specific suffix, such as `*.spec.ts` or `*.unit.ts`. This convention allows
you to easily distinguish and run your unit tests separately.

This solitary unit testing environment provides numerous benefits for optimizing your CI process:

* **Isolation**: With seamlessly handling mock creation, your unit tests are shielded from external dependencies. This
  ensures that tests execute independently, without interference or unwanted side effects. The result is consistent and
  reliable test outcomes.


* **Speed**: By removing the need to interact with external systems, Automock significantly speeds up your unit tests.
  Freed from potential delays or bottlenecks caused by dependencies, tests can focus solely on the code being tested.
  This translates to shorter CI build times, faster feedback loops, and increased developer productivity.


* **Stability**: Automock's isolation mitigates the impact of changes in external systems. Your unit tests become more
  stable, as failures caused by issues in external services or APIs are eliminated. Your CI pipeline remains robust and
  dependable.


* **Parallelization**: The solitary unit testing environment enables parallel execution of unit tests. Each test is
  self-contained and isolated, allowing multiple tests to run concurrently without conflicts or dependencies. This
  parallelization further boosts CI build speed and scalability.
