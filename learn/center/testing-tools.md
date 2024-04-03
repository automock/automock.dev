---
sidebar_position: 2
---

# Testing Glossary

In the realm of software testing, several key concepts and tools play pivotal roles. Understanding these helps in
selecting the right tools for your project's needs.

## Key Concepts

### Test Runner

A **Test Runner** is a tool that executes your tests and reports the results. It determines the order in which tests are
run, handles the setup/teardown of each test, and reports outcomes.

### Assertion Library

An **Assertion Library** provides a set of methods to assert certain conditions in your tests. These assertions are used
to validate whether the code behaves as expected under various conditions.

### Mock Library (Test Doubles)

A **Mock Library** allows you to replace parts of the system under test with mock objects that mimic the
behavior of real objects. This is crucial for isolating the unit of code being tested.

### Testing Framework

A **Testing Framework** provides a structure and set of guidelines for writing and organizing your tests. It often
includes built-in support for test runners, assertion methods, and sometimes mocking capabilities.

### Suites - A Meta Framework

**Suites** stands apart as a meta-framework. It's agnostic to any specific assertion library or test runner. Instead of
providing its testing tools, it integrates and enhances existing ones. Whether you're using Mocha, Jest, Vitest, or any
other tools, Suites can work in tandem with them. It provides a unified interface and additional functionalities to work
with a variety of DI frameworks and testing libraries.

## Tool Categorization

Below is a table categorizing some popular testing tools based on their primary function:

| Tool/Framework     |     Assertion      |      Mocking       |       Runner       |
|--------------------|:------------------:|:------------------:|:------------------:|
| Jest (Framework)   | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Vitest (Framework) | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Mocha              |                    |                    | :white_check_mark: |
| Ava                |                    |                    | :white_check_mark: |
| Sinon              |                    | :white_check_mark: |                    |
| Chai               | :white_check_mark: |                    |                    |
| Bun (Native)       |                    | :white_check_mark: | :white_check_mark: |
| Node (Native)      | :white_check_mark: | :white_check_mark: | :white_check_mark: |

This table is a simplified representation, and some tools may offer features that fall into multiple categories.
