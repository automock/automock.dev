---
sidebar_position: 1
description: 'The `TestBed` API is a factory for creating `TestBedBuilder` instances'
---

# TestBed API

:package: Source package: `@automock/jest`, `@automock/sinon`

The `TestBed` API is a factory for creating `TestBedBuilder` instances. It provides a single method for creating a
`TestBedBuilder` instance.

### `TestBed.create<TClass>(ClassUnderTest): TestBedBuilder<TClass>`

The `TestBed.create(classToTest)` method initializes the `TestBed` with the class you want to test. It takes the
`classToTest` parameter, which represents the class for which you want to create an instance.

**Usage Example:**

```typescript
const { unit, unitRef } = TestBed.create(ClassUnderTest);
```
