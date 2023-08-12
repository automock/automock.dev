---
sidebar_position: 1
---

# Putting all together

Consider a simple example where you have a `UserService` class that relies on a `Database` service for data retrieval.
Traditionally, when writing unit tests for `UserService`, you would need to manually create mock objects for the
`Database` dependency and stub out its methods. This manual setup can be time-consuming and error-prone, leading to
repetitive code and increased maintenance overhead.

Take a look at the following example (using Jest, but the same applies for Sinon):

```typescript
import { TestBed } from '@automock/jest';

class Database {
  getUsers(): Promise<User[]> { ... }
}

class UserService {
  constructor(private database: Database) {}

  async getAllUsers(): Promise<User[]> {
    return this.database.getUsers();
  }
}

describe('User Service Unit Spec', () => {
  let userService: UserService;
  let database: jest.Mocked<Database>;

  // Setting up the TestBed
  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(UserService).compile();
    userService = unit;
    database = unitRef.get(Database);
  });

  test('should retrieve users from the database', async () => {
    const mockUsers: User[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    database.getUsers.mockResolvedValue(mockUsers);

    const users = await userService.getAllUsers();

    expect(database.getUsers).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });
});
```

Explanation:

The `beforeAll` hook sets up the `TestBed` by creating an instance of the `UserService` and compiling it. The compiled
`TestBed` provides the `unit` instance (instance of `UserService`) and the `unitRef` (reference to mocked dependencies)
used in the test.

```typescript
// Setting up the TestBed
beforeAll(() => {
  const { unit, unitRef } = TestBed.create(UserService).compile();
  userService = unit;
  database = unitRef.get(Database);
});
```

The `test` block contains the unit test for the `getAllUsers` method of the `UserService` class. It starts by mocking
the return value of the `getUsers` method in the `Database` dependency. This ensures that when `getAllUsers` is called,
it returns the mocked users instead of performing a real data retrieval operation. Remember, `database.getUsers` is
already stubbed by Automock.

```typescript
test('should retrieve users from the database', async () => {
  const mockUsers: User[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  database.getUsers.mockResolvedValue(mockUsers);

  const users = await userService.getAllUsers();

  expect(database.getUsers).toHaveBeenCalled();
  expect(users).toEqual(mockUsers);
});
```

For more detailed information about the `TestBed`, `UnitReference`, and other APIs provided by Automock, you

can refer to the [Automock API Reference](https://automock-docs.example.com/api-reference).