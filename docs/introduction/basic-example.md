---
sidebar_position: 3
---

# Basic Example

To illustrate the fundamental principle of Automock, let's consider a simple scenario where you have a `UserService`
class that depends on a `Database` service for data retrieval. Traditionally, writing unit tests for such scenarios
requires manually creating mock objects and stubbing their methods. This process can be time-consuming and error-prone.

Let's take a look at how you can use Automock to simplify unit testing:

```typescript
class Database {
  getUsers(): Promise<User[]> { ... }
}

class UserService {
  constructor(private database: Database) {}

  async getAllUsers(): Promise<User[]> {
    return this.database.getUsers();
  }
}
```

```typescript
import { TestBed } from '@automock/jest';

describe('User Service Unit Test', () => {
  let userService: UserService;
  let database: jest.Mocked<Database>;

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

In this example, Automock simplifies the creation of mock objects by automatically generating mocks for class
dependencies. This allows you to focus on writing meaningful test cases without getting bogged down in manual mock
setup. Automock supports both Jest and Sinon testing frameworks, providing a seamless testing experience across
different ecosystems.

To explore more features and in-depth usage of Automock, refer to our detailed documentation and API references.

Happy testing!
