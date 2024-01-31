---
sidebar_position: 4
description: 'The `UnitTestBed` interface represents the result of compiling a `TestBedBuilder`.'
---

# UnitTestBed API

:package: Source package: `@suites/core`

The `UnitTestBed` API is a pivotal component of Automock, designed to facilitate the creation and management of the unit
under test. When you're testing a particular unit a class) in isolation, it's crucial to ensure that its dependencies
are correctly mocked. This API provides a streamlined way to achieve that, ensuring that your tests are both accurate
and maintainable. When utilizing `TestBed`, the `.compile()` method returns an object with two properties: `unit`
and `unitRef`. These properties provide access to the instance of the class under test and references to its
dependencies, respectively.

### `unit: TClass`

The `unit` property represents the actual instance of the class under test. This allows you to directly interact with
the class and invoke its methods during your test scenarios. When you create a unit using the `UnitTestBed` API, it's
instantiated with all its required dependencies. These dependencies are either the overridden ones or the mocked
versions, depending on your test setup.

### `unitRef: UnitReference`

The `unitRef` property serves as a reference to the dependencies of the class under test. By accessing `unitRef`, you
can retrieve the automatically generated mock object for the dependency. This enables you to stub methods, define
behaviors, and assert method invocations on the mock object.

**Example usage:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest).compile();
```