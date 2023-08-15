---
sidebar_position: 5
---

# Fundamental Concepts

In the world of unit testing and test doubles, you'll come across various terms like stubs and mocks. It's important to
understand these concepts and how they relate to Automock. Additionally, we'll delve into Solitary Unit Tests, a
foundational approach for writing effective tests.

## Solitary Unit Tests

**Solitary Unit Tests** emphasize testing a single unit of code in isolation from its dependencies. This approach
ensures that each component is thoroughly tested without being affected by the behavior of other components. Automock
enhances the process of writing Solitary Unit Tests by simplifying the mocking of class dependencies.

## Stubs

**Stubs** are objects or functions that mimic the behavior of a real component but provide controlled and predictable
outputs. They help isolate the unit under test by substituting real dependencies with predetermined responses.

### Example using Jest

In Jest, you can create a stub using the `jest.fn()` function. Here's how you can stub a method:

```typescript
const mockFunction = jest.fn();
mockFunction.mockReturnValue("Hello, World!");

console.log(mockFunction()); // Output: Hello, World!
```

## Mocks

Mocks are objects that simulate the behavior of real components and allow you to make assertions about their
interactions. In a sense, mocks are collections of stubs, each of which has predefined behavior to mimic specific
scenarios. These objects not only define how methods should behave and what values they should return but also have the
ability to record method calls and verify how many times they were invoked. This capability makes mocks more powerful
than simple stubs, as they provide a comprehensive way to track and validate the interactions between components during
testing.

### Example using Sinon

In Sinon, you can create a mock using the `sinon.createStubInstance()` function. Here's how you can mock a method:

```typescript
const mockObject = sinon.createStubInstance(MyClass);
mockObject.myMethod.returns("Hello, World!");

console.log(mockObject.myMethod()); // Output: Hello, World!
```

### Example with Automock

Suppose you have a `UserService` class with a dependency on `CustomService`. Automock simplifies the mocking process,
allowing you to focus on testing `UserService` in isolation:

```typescript
// UserService.ts
@Injectable()
export class UserService {
  constructor(private readonly customService: CustomService) {
  }
}

// UserService.spec.ts
const {unitRef} = TestBed.create(UserService).compile();
unitRef.mock<CustomService>('CustomService').using({ /* mock properties */});

// Now you can test UserService in isolation
```

## `jest.Mocked` and `SinonStubbedInstance`

When using Jest and Sinon along with Automock, you can take advantage of type definitions like `jest.Mocked`
and `SinonStubbedInstance`. These types enhance your ability to access and interact with the mocked versions of your
dependencies, providing autocompletion and type safety.

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

Understanding these definitions and how Automock interacts with them can greatly enhance your unit testing experience.

Keep in mind that while the terms "stub" and "mock" are commonly used, different testing frameworks might have
variations in their behavior. Automock aims to provide a unified and straightforward experience across various testing
libraries.

By mastering these concepts and leveraging Automock, you'll be equipped to write thorough, focused, and reliable unit
tests that contribute to the quality of your codebase.
