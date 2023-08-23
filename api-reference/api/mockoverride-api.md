---
sidebar_position: 3
description: 'The `MockOverride` interface provides methods for specifying the value or mock implementation to be used for a mocked
dependency.'
---

# MockOverride API

:package: Source package: `@automock/core`

The `MockOverride` interface is designed to provide the ability to define specific overrides for mocking dependencies
within a test environment. When working with the `TestBedBuilder` API, invoking the `.mock()` method will yield an
instance of `MockOverride`. This interface provides methods that let you specify whether the mocked dependency should
return a constant value or follow a custom mock implementation.

---

### `.using<TDependency>(mockImplementation: DeepPartial<TDependency>): TestBedBuilder<TClass>`

This variant of the `.using()` method enables you to provide a mock implementation for the dependency. By supplying
a `DeepPartial` of the `TDependency` type, you can define specific behaviors for methods or properties of the mocked
dependency.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest)
  .mock(Database)
  .using({ getUsers: async () => [{ id: 1, name: 'John' }] })
  .compile();
```

When using `.using()` to provide a mock implementation, the subject being mocked will be replaced completely without any
stubs. This means that methods not explicitly defined in the `mockImplementation` object will not have any behavior. If
you still want to provide stubs for specific methods while using a custom implementation, you can do so using
Jest's `jest.fn()` (or Sinon's `sinon.stub()`).

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

### `.using<TDependency>(value: TDependency & ConstantValue): TestBedBuilder<TClass>`

This method allows you to set a constant value for the mocked dependency.

#### Understanding `ConstantValue` Terminology

In Dependency Injection frameworks, it's common to inject not just classes but also values. These values are often fixed
or primitive, ensuring a predictable behavior for the mocked dependency in your tests. The `ConstantValue` type in
Automock encapsulates these fixed or primitive values, allowing you to mock dependencies that are values rather than
classes.

The `ConstantValue` type is imported from `@automock/common`:

```typescript
type ConstantValue = unknown[] | string | number | boolean | symbol | null;
```

**Usage Example:**

```typescript
TestBed.create(MyClass)
  .mock<string[]>('DependencyToken')
  .using(['item1', 'item2', 'item3'])
  .compile();
```

