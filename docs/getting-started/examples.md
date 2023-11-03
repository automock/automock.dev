---

sidebar_position: 4
description: 'A collection of examples showcasing the functionality and versatility of Automock.'
---

# Step-by-Step Example

**This page contains a step-by-step example that demonstrate how to use Automock effectively.**

Please note that this example is agnostic to the testing framework (we'll use Jest) and the specific Automock
adapter you're using. The injection mechanism might differ based on the DI framework. For more details on the different
adapters available and their specific functionalities, refer to the [Adapters page](/docs/adapters/intro)

---

In this example, we have a `UserService` class that depends on a `Database` class to fetch users. We'll mock
the `Database` class to test the `UserService` class in isolation.

<details>
  <summary><strong>The definition of "Unit"</strong></summary>
  <div>
    <p>
In software testing, a unit refers to the smallest testable part of an application. It can be a function, method,
procedure, module, or object. In the context of Automock, we consider the unit to be a TypeScript class.
    </p>
  </div>
</details>

### Step 1: Define the Classes

Here are the two classes:

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

**In the example above, we consider `UserService` to be the unit under test.**

### Step 2: Set Up the Test

**We'll use the `TestBed` from the `@automock/jest` package to create our test environment.**

:::info
A `TestBed` is an environment where testing is conducted. It contains the necessary setup to run the tests.
In the context of unit testing, a `TestBed` provides an isolated environment to test individual units of code 
without external dependencies.
:::

**In the test setup, we:**

1. Create a test environment for `UserService`.
2. Obtain the actual instance of `UserService` and a mocked instance of `Database` using `unit` and `unitRef.get
   (Database)`, respectively.
3. We mock the `getUsers` method of the `Database` class to return a predefined list of users.
4. We then call the `getAllUsers` method of `UserService` and verify that it correctly interacts with the `Database`
   class and returns the expected users.

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
    const mockUsers: User[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane'}];
    database.getUsers.mockResolvedValue(mockUsers);

    const users = await userService.getAllUsers();

    expect(database.getUsers).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });
});
```

<details>
  <summary><strong>Why are we mocking the Database class?</strong></summary>
  <div>
    <p>
The Database class is an external dependency. By mocking the Database class, we can simulate its behavior without
actually interacting with a real database. This ensures that our tests are not affected by the state of the database and
can run consistently in any environment.
    </p>
  </div>
</details>

### Step 3: Extending the Example - Adding a Logger

**Let's extend our example by adding a `Logger` interface and integrating it into the `UserService` class.**

```typescript
interface Logger {
  log(message: string): void;
}

class UserService {
  constructor(private database: Database, private logger: Logger) {}

  async getAllUsers(): Promise<User[]> {
    this.logger.log('Fetching all users...');
    return this.database.getUsers();
  }
}
```

**Now, when you set up your test, you'll also need to mock the `Logger` interface:**

```typescript

beforeAll(() => {
  let logger: jest.Mocked<Logger>;
  const { unit, unitRef } = TestBed.create(UserService).compile();

  userService = unit;
  database = unitRef.get(Database);
  logger = unitRef.get(Logger);
});

test('should log a message and retrieve users from the database', async () => {
  const mockUsers: User[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  database.getUsers.mockResolvedValue(mockUsers);

  const users = await userService.getAllUsers();

  expect(logger.log).toHaveBeenCalledWith('Fetching all users...');
  expect(database.getUsers).toHaveBeenCalled();
  expect(users).toEqual(mockUsers);
});
```

### Step 4: Using `.mock().using()` for Mock Implementation

**Automock provides a more declarative way to specify mock implementations using the `.mock().using()` method chain.
This allows you to define the mock behavior directly when setting up the test bed.**

Here's how you can modify the test setup to use this approach:

```typescript
beforeAll(() => {
  const mockUsers: User[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

  const { unit, unitRef } = TestBed.create(UserService)
    .mock(Database)
    .using({ getUsers: async () => mockUsers })
    .compile();

  userService = unit;
  database = unitRef.get(Database);
});
```

In this approach, we've eliminated the need to manually mock the `getUsers` method in the test body. Instead, we've
defined the mock behavior directly in the test setup using `.mock().using()`.

### Step 5: Adding Stubs to `.mock().using()`

While the `.mock().using()` method provides a way to define the default behavior of the mocked method, you might still
want to add specific stubs to further control or monitor the behavior during tests. Here's how you can achieve that:

```typescript
beforeAll(() => {
   const mockUsers: User[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

   const { unit, unitRef } = TestBed.create(UserService)
    .mock(Database)
    .using({ getUsers: jest.fn().mockResolvedValue(mockUsers) })
    .compile();

  userService = unit;
  database = unitRef.get(Database);
});

test('should log a message, retrieve users from the database, and verify method call', async () => {
  const users = await userService.getAllUsers();

  expect(logger.log).toHaveBeenCalledWith('Fetching all users...');
  expect(database.getUsers).toHaveBeenCalled();
  expect(users).toEqual([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
});
```

In this step, we've added a stub for the `getUsers` method using Jest's `jest.fn()`. This allows us to both define the
mock behavior and verify that the method was called during the test.
