---
sidebar_position: 7
title: FAQ
---

# Frequently Asked Questions

## General Questions

### What is Suites?

Suites is a testing meta-framework designed to streamline and unify the testing process across various software
development environments. It integrates with multiple Dependency Injection (DI) frameworks and testing libraries,
providing a versatile platform for both unit and integration testing.

### How does Suites differ from traditional testing frameworks?

Suites is not just a testing framework; it's a meta-framework. This means it works on top of existing frameworks and
libraries, providing a unified interface and set of tools. It supports various testing approaches, including solitary
and sociable unit tests, and broad integration tests.

### Who can benefit from using Suites?

Suites is ideal for developers and teams working in diverse environments who seek a unified, efficient approach to
testing. It is particularly beneficial for projects that require integration with multiple DI frameworks and testing
libraries.

## Technical Questions

### How do I integrate Suites with my existing testing setup?

You can integrate Suites by installing it as a dependency in your project and configuring it to work with your existing
DI frameworks and testing libraries. Detailed guides and examples are available in our documentation.

### Can Suites be used with any DI framework?

Suites is designed to be framework-agnostic and works with a variety of popular DI frameworks, including InversifyJS,
TSyringe, and others.

### Does Suites support Continuous Integration (CI) pipelines?

Yes, Suites is optimized for CI environments. It enhances CI pipelines' efficiency and supports various CI tools.

## Usage Questions

### How do I write sociable unit tests with Suites?

Sociable unit tests can be written using `TestBed.sociable` in Suites. This approach allows testing units in conjunction
with real instances of their dependencies. Our documentation provides detailed examples.

### Can I restrict I/O operations in my tests with Suites?

Yes, Suites supports testing environments where I/O operations are restricted, such as using Docker containers. This
ensures that unit tests remain isolated and do not depend on external I/O.

## Migration Questions

### How do I migrate from Automock to Suites?

Migrating from Automock to Suites involves updating your dependencies and potentially some minor changes in your testing
setup. A comprehensive migration guide is available in our documentation.

### Will there be continued support for Automock?

Automock will receive support for critical bug fixes for a limited time. However, all new features and enhancements will
be focused on Suites. Users are encouraged to migrate to Suites for the latest updates and features.

## Community and Support

### How can I contribute to Suites?

We welcome contributions! You can contribute by submitting pull requests, reporting issues, or suggesting new features.
Check out our contribution guide for more details.

### Where can I get support or ask questions?

Our community forum is a great place to ask questions and get support from fellow users and the Suites development team.
You can also find additional resources and contact information on our website.
