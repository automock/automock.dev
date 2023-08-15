---
sidebar_position: 4
description: 'The `UnitTestBed` interface represents the result of compiling a `TestBedBuilder`.'
---

# UnitTestBed API

Source package: `@automock/core`

The `UnitTestBed` interface represents the result of compiling a `TestBedBuilder`.

When utilizing `TestBed`, the `.compile()` method returns an object with two important properties: `unit` and `unitRef`.
These properties provide access to the instance of the class under test and references to its dependencies,
respectively.

### `unit: TClass`

The `unit` property represents the actual instance of the class under test. This allows you to directly interact with
the class and invoke its methods during your test scenarios.

### `unitRef: UnitReference`

The `unitRef` property serves as a reference to the dependencies of the class under test. By accessing `unitRef`, you
can retrieve the automatically generated mock object for the dependency. This enables you to stub methods, define
behaviors, and assert method invocations on the mock object.

**Example usage:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest).compile();
```