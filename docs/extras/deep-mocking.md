---
sidebar_position: 1
---

# Deep Mocking

Deep mocking can be a heavy operation, as it requires setting the depth of recursion to identify and mock all nested
dependencies. Additionally, using deep mocks can lead to unexpected behavior when calling methods in unit tests, as the
stubs that have been set might interfere with the desired test outcomes.

While Automock does not directly support deep mocking, we can demonstrate an example of how it might be achieved
manually:

Consider the `ClassWithModels` class, which has a dependency on the `PrismaService`. To create a deep mock for this class,
we can provide a custom mock implementation for the nested methods of the models' property. In this example, we'll use
Jest to provide mock functions for findUnique and find under the models.user namespace, and `findUnique` under the
models.animal namespace:

```typescript
export class ClassWithModels {
  public constructor(private prismaService: PrismaService) {}

  public async findUsers(): Promise<User[]> {
    return this.prismaService.user.find();
  }
}

beforeAll(() => {
  const { unit, unitRef } = TestBed.create(ClassWithModels)
    .mock(PrismaService)
    .using({
      models: {
        user: { find: jest.fn() },
        animal: { findUnique: jest.fn() },
      },
    })
    .compile();
});
```

> :bulb: **Note:** Use `sinon.stub()` for Sinon

It's essential to approach deep mocking with caution, as it can lead to complex and hard-to-maintain test scenarios.
Instead, it's generally recommended focusing on mocking only the direct dependencies of a class to keep the tests clear,
concise, and easily understandable. This approach allows for efficient unit testing while still providing effective test
coverage.
