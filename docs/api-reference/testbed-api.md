---
sidebar_position: 1
description: ''
---

# TestBed API

Source package: `@automock/jest`, `@automock/sinon`

The `TestBed` API is a factory for creating `TestBedBuilder` instances. It provides a single method for creating a
`TestBedBuilder` instance.

### `TestBed.create<TClass>(classToTest): TestBedBuilder<TClass>`

The `TestBed.create(classToTest)` method initializes the `TestBed` with the class you want to test. It takes the
`classToTest` parameter, which represents the class for which you want to create an instance.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest);
```

### Dependency References and Instance Access

When utilizing `TestBed`, the `.compile()` method returns an object with two important properties: `unit` and `unitRef`.
These properties provide access to the instance of the class under test and references to its dependencies,
respectively.
