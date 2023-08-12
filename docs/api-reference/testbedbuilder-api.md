---
sidebar_position: 2
description: ''
---

# TestBedBuilder API

Source package: `@automock/core`

The `TestBedBuilder` interface provides methods for configuring and compiling the `TestBed`.

### `.mock(identifier: Type<TDependency>): MockOverride<TDependency, TClass>`

The `.mock(identifier)` method is used to declare a dependency to be mocked using its type. It takes the `type` parameter,
which represents the type of the dependency to be mocked.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(UserService)
  .mock(Database)
  .using({ getUsers: async () => [] })
  .compile();
```

In this example, the `Database` dependency is declared to be mocked using its type. The `.using()` method allows you to
provide default values or behavior for the methods of the mocked dependency.

---

### `.mock<TDependency>(identifier: string): MockOverride<TDependency, TClass>`

The `.mock(identifier)` method is used to declare a dependency to be mocked using a token string. It takes
the `identifier` parameter, which represents the token string representing the dependency to be mocked.

When using `.mock()` method with a token identifier, the type of the dependency is not known at compile time. To specify
the type, use the generic argument like `.mock<SomeType>('MY_TOKEN')`. This provides better type safety and ensures that
the mocked value aligns with the expected type.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create

(UserService)
  .mock('CUSTOM_TOKEN')
  .using({ ... })
  .compile();
```

> :bulb: The `using()` method allows you to provide default values or behavior for the methods of the mocked dependency, read more in the `MockOverride` API Reference

---

### `.mock<TDependency>(identifier: string, metadata: ReferenceMetadata): MockOverride<TDependency, TClass>`

> :bulb: **Note:** availability might vary depending on the installed Automock adapter. Check the documentation
of the installed adapter for more details.

The `.mock()` method takes two parameters: `identifier` (string token), representing the token associated with the
dependency you want to mock, and `metadata`, which provides a detailed reference for Automock to identify distinct class
dependencies. This metadata reference might differ based on the installed Automock adapter, tailored to specific adapter
needs.

Different adapters may suggest distinct interfaces for `ReferenceMetadata`, so it's recommended to check the
documentation of the installed adapter for accurate details.

This method returns a `MockOverride` that allows you to provide custom implementation, behaviors, and other attributes
to the mocked dependency. It's a powerful tool to tailor the behavior of the mock to your test requirements.

**Example:**

```typescript
const { unitRef, unit } = TestBed.create(ClassUnderTest)
  .mock<TDependency>('TOKEN', { canFly: true })
  .using({ ... })
  .compile();

unitRef.get('TOKEN', { canFly: true }); // Returns the customized mock
```

---

### `.compile(): UnitTestBed<TClass>`

The `.compile()` method finalizes `TestBed` setup and returns an object that contains the instance of the class under
test (`unit`) and a reference to the mocked dependencies (`unitRef`).

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(UserService).compile();
```
