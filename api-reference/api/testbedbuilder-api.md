---
sidebar_position: 2
description: 'The `TestBedBuilder` interface provides methods for configuring and compiling the `TestBed`.'
---

# TestBedBuilder API

:package: Source package: `@automock/core`

The `TestBedBuilder` interface provides methods for configuring and compiling the `TestBed`.

The `.mock()` method is a foundational part of the `TestBedBuilder` API, designed to facilitate the mocking of
dependencies in your tests. By accepting a generic argument `TDependency`, it provides type safety, ensuring that the
mocked dependency aligns with the expected type. Once invoked, this method returns a `MockOverride` instance. This
returned instance grants you the capability to define custom implementations, behaviors, and other attributes for the
mocked dependency.

---

### `.mock<TDependency>(type: Type<TDependency>): MockOverride<TDependency, TClass>`

The `.mock(type)` method is used to declare a dependency to be mocked using its type. The `TDependency` generic
parameter represents the type of the dependency that you want to mock.

The method takes the `type` parameter, which represents the type of the dependency to be mocked. This type is then used
to create a mock override, which can be further configured using the .using() method.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest)
  .mock(Database)
  .using({ getUsers: async () => [] })
  .compile();
```

---

### `.mock<TDependency>(token: string | symbol): MockOverride<TDependency, TClass>`

The `.mock(token)` method is used to declare a dependency to be mocked using a string-based or symbol-based token.
It takes the `token` parameter, which represents the string or symbol token representing the dependency to be mocked.

When using `.mock()` method with a token identifier, the type of the dependency is not known at compile time. To specify
the type, use the `TDependency` generic argument like `.mock<SomeType>('CUSTOM_TOKEN')`. This provides better type
safety and ensures that the mocked value aligns with the expected type.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest)
  .mock<SomeType>('CUSTOM_TOKEN')
  .using({ ... })
  .compile();
```

---

### `.mock<TDependency>(identifier: string | symbol, metadata: IdentifierMetadata): MockOverride<TDependency, TClass>`

The `.mock()` method, in this context, accepts two parameters:

- `identifier`: A string or symbol token that represents the unique identifier associated with the dependency you intend
  to mock.
- `metadata`: Additional information that aids Automock in distinguishing between similar class dependencies.

**Example:**

```typescript
const { unitRef, unit } = TestBed.create(ClassUnderTest)
  .mock<SomeType>('CUSTOM_TOKEN', { canFly: true })
  .using({...})
  .compile();

unitRef.get('CUSTOM_TOKEN', {canFly: true});
```

> :bulb: **Note:** The structure and availability of `IdentifierMetadata` can vary based on the Automock adapter in use. Different adapters might define unique interfaces for `IdentifierMetadata` to cater to their specific requirements. Therefore, it's advisable to consult the documentation of your installed adapter to understand the precise details and capabilities.

---

### `.compile(): UnitTestBed<TClass>`

The `.compile()` method finalizes `TestBed` setup and returns an object that contains the instance of the class under
test (`unit`) and a reference to the mocked dependencies (`unitRef`).

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest).compile();
```
