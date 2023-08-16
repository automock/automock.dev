---
sidebar_position: 3
description: 'The `MockOverride` interface provides methods for specifying the value or mock implementation to be used for a mocked
dependency.'
---

# MockOverride API

Source package: `@automock/core`

The `MockOverride` interface provides methods for specifying the value or mock implementation to be used for a mocked
dependency.

### `.using(mockImplementation: TImpl): TestBedBuilder<TClass>`

The `.using(mockImplementation)` method specifies the mock implementation to be used for the mocked dependency. It takes
the `mockImplementation` parameter, which represents the mock implementation for the mocked dependency.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest)
  .mock(Database)
  .using({ getUsers: async () => [{ id: 1, name: 'John' }] })
  .compile();
```

In this example, the `.using()` method is used to specify the mock implementation for the mocked dependency.
The `mockImplementation` parameter can be an object representing the mock implementation, providing custom responses for
specific methods.

> :bulb: **Note:** When using `.using()` to provide a mock implementation, the subject being mocked (in the `.mock(...)` method)
> will be replaced completely without any stubs. This means that methods not explicitly defined in the `mockImplementation` object
> will not have any behavior. If you still want to provide stubs for specific methods while using a custom implementation, you can
> do so using Jest's `jest.fn()` (or Sinon's `sinon.stub()`).

To add a stub for a specific method, you can use the following syntax:

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest)
  .mock(Database)
  .using({ getUsers: jest.fn().mockReturnValue([{ id: 1, name: 'John' }]) })
  .compile();
```

This syntax ensures that the `getUsers` method will have the specified mock implementation and return value, while other
methods will behave as if they were replaced with an empty implementation. This allows for a more granular control of
the mock behavior when combining custom mock implementations with specific stubs.

---

### `.using(value: ConstantValue): TestBedBuilder<TClass>`

The `.using(value)` method allows specifying fixed values to be used for mocked dependencies. It takes the `value`
parameter, which represents the constant value for the mocked dependency.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest)
  .mock<string[]>('CUSTOM_TOKEN')
  .using(['one', 'two', 'three'])
  .compile();
```

In this example, the `.using()` method is used to specify the fixed value for the mocked dependency. The `value`
parameter represents the value that will be returned when the mocked dependency is requested during the test execution.

> :bulb: **Note:** When using `.using()` to provide a fixed value, the subject being mocked (in the `.mock(...)` method)
> will be replaced completely by the provided value. This means that the mocked dependency will always return the specified
> value, regardless of its original implementation.
