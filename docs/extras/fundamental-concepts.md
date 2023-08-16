---
sidebar_position: 5
---

# Fundamental Concepts

In the realm of unit testing, understanding key concepts like Solitary Unit Tests, Stubs, Mocks, and the role of testing
frameworks is essential. These concepts provide the foundation for effective and reliable testing practices, setting the
stage for successful use of tools like Automock. Note that this section covers fundamental testing concepts, decoupled from the specific use of Automock.

## Solitary Unit Tests

**Solitary Unit Tests** form the cornerstone of effective testing strategies. These tests focus on assessing a single
unit of code in complete isolation from its external dependencies. By isolating the unit under test, you ensure that
testing results accurately reflect the behavior of that specific unit, free from any unintended interactions or
dependencies on other components.

## Stubs

**Stubs** are versatile tools that help isolate units for testing by mimicking real components' behavior with
controlled, predictable responses. A stub replaces a real dependency, allowing you to define how it should behave during
tests.

### Example using Jest

In Jest, creating a stub involves the `jest.fn()` function. Here's how you can stub a method:

```typescript
const mockFunction = jest.fn();
mockFunction.mockReturnValue("Hello, World!");

console.log(mockFunction()); // Output: Hello, World!
```

## Mocks

**Mocks** are advanced versions of stubs. A mock is a collection of stubs, each emulating specific behavior scenarios.
In addition to returning predefined values, mocks also track method calls and their invocations, allowing you to verify
interactions during testing.

### Example using Sinon

In Sinon, you can create a mock with `sinon.createStubInstance()`. Here's an example:

```typescript
const mockObject = sinon.createStubInstance(MyClass);
mockObject.myMethod.returns("Hello, World!");

console.log(mockObject.myMethod()); // Output: Hello, World!
```

## Understanding `jest.Mocked` and `SinonStubbedInstance`

When using Jest and Sinon, these specialized types offer enhanced interaction with mocked dependencies. The
`jest.Mocked` type and `SinonStubbedInstance` type provide autocompletion and type safety, streamlining your unit
testing experience.

### Example with `jest.Mocked`

```typescript
import { jest } from '@jest/globals';
import { MyClass } from './MyClass';

const myMockedClass: jest.Mocked<MyClass> = jest.createMockFromClass(MyClass);
myMockedClass.myMethod.mockReturnValue("Hello, World!");

console.log(myMockedClass.myMethod()); // Output: Hello, World!
```

### Example with `SinonStubbedInstance`

```typescript
import { sinon } from 'sinon';
import { MyClass } from './MyClass';

const myStubbedInstance: sinon.SinonStubbedInstance<MyClass> = sinon.createStubInstance(MyClass);
myStubbedInstance.myMethod.returns("Hello, World!");

console.log(myStubbedInstance.myMethod()); // Output: Hello, World!
```

## Role of Testing Frameworks

In the software testing landscape, several core concepts ensure code quality and reliability. These concepts include a
test runner, an assertion library, and a test doubles library.

* A **test runner** automates test execution, organizing test suites and presenting results coherently.

* An **assertion library** defines and performs assertions, validating expected behavior.

* A **test doubles library** facilitates the creation and management of test doubles like stubs, spies, and mocks.

A popular combination of these is Mocha (test runner), Chai (assertion library), and Sinon (test doubles library). Jest
integrates all these into one comprehensive testing framework. Automock primarily focuses on Jest and Sinon, providing
an integrated solution for automatic mock generation and dependency injection management.

Understanding these concepts empowers you to write comprehensive and effective unit tests, contributing to the quality
of your codebase.