---
sidebar_position: 1
title: Solitary Unit Tests
---

# Solitary Unit Tests

## Introduction

Solitary Unit Tests, or isolated tests, are designed to evaluate a single unit of work entirely separate from its
external dependencies. These tests leverage test doubles, such as [mocks](/docs/glossary/mock) and
[stubs](/docs/glossary/stub), to mimic the behavior of these dependencies. This method is pivotal for confirming the
functionality and reliability of individual units within a system, ensuring that each part performs as expected under
controlled conditions.

## Advantages of Solitary Unit Testing

- **Precision and Focus**: By isolating the unit from external influences, tests can accurately target and verify
  specific functionalities, enhancing clarity and test effectiveness.

- **Design Insights**: Solitary tests can reveal design decisions, highlighting areas for improvement or refactoring.

- **Documentation**: Serve as a precise documentation for classes, detailing expected inputs, outputs, and interactions.

- **Simplified Test Maintenance**: Test fixtures and setups are minimal and specific to each test, avoiding the
  complexity and overhead associated with broader test environments.

> **Figure Placeholder**: "Solitary Unit Test Flow"—A visual representation of a unit being tested in isolation, with
> mock objects in place of real dependencies. _This figure should illustrate the straightforward, focused nature of
solitary unit testing, highlighting the isolation of the unit under test._

## Step-by-Step Example

> :bulb: Please note that this example is agnostic to the mocking library (we'll use Jest) and any specific [DI framework's
> adapter](docs/developer-guide/adapters). The injection mechanism might differ based on the DI framework.

In this example, we have a `UserService` class that depends on a `Database` class to fetch users. We'll mock
the `Database` class to test the `UserService` class in isolation.

### Step 1: Define the Classes

Here are the interfaces and classes we'll use in our example, consider the `UserCreatedEventHandler` class as the unit
under test:

```typescript title="types.ts"
export interface IncomingEvent {
  type: string;
  data: unknown;
}

export interface EventHandler {
  handle(event: IncomingEvent): Promise<boolean>;
}
```

```typescript title="services.ts"
import { IncomingEvent } from './types';

@Injectable()
export class Logger {
  log(message: string): void {
    console.log(message);
  }
}

@Injectable()
export class ReporterService {
  async report(event: IncomingEvent): Promise<void> { /* ... */ }
}
```

```typescript title="user-created.handler.ts"
import { Logger, ReporterService } from './services';
import { EventHandler, IncomingEvent } from './types';

@Injecable()
export class UserCreatedEventHandler implements EventHandler {
  constructor(private logger: Logger, private reporter: ReporterService) {}

  async handle(event: IncomingEvent): Promise<boolean> {
    this.logger.log('handling incoming user event');
    await this.reporter.report(event);
    return true;
  }
}
```

### Step 2: Set Up the Test

To test the `UserCreatedEventHandler` class in isolation, we'll use the `TestBed` factory from `@suites/unit` package to
create our test environment. Here's how we can set up the test:

```typescript title="user-created.handler.spec.ts" {1,9-10,14} showLineNumbers
import { TestBed } from '@suites/unit';
import { UserCreatedEventHandler } from './user-created.handler';
import { Logger, ReporterService } from './services';

describe('User Created Handler Unit Spec', () => {
  let underTest: UserCreatedEventHandler;

  // Declare the mock instances
  let logger: jest.Mocked<Logger>;
  let reporter: jest.Mocked<ReporterService>;

  beforeAll(() => {
    // Create the test environment
    const { unit, unitRef } = TestBed.solitary(UserService).compile();

    underTest = unit;
    logger = unitRef.get(Logger);
    reporter = unitRef.get(ReporterService);
  });
  
  it('should log a message and report the event', async () => {
    const eventFixture: IncomingEvent = { type: 'user.created', data: { id: 1, name: 'John' } };

    await underTest.handle(eventFixture);

    expect(logger.log).toHaveBeenCalledWith('handling incoming user event');
    expect(reporter.report).toHaveBeenCalledWith(eventFixture);
  });
});
```

In this setup, we've used the `.compile()` method to create a test environment for the `UserCreatedEventHandler`
class. It automatically replaces the `Logger` and `ReporterService` dependencies with mock instances, allowing
us to test the `UserCreatedEventHandler` class in isolation.

By default, all the methods of the mock instances are no-op functions. We can further define the behavior of these
methods using the references to the mock instances (using `logger` and `reporter` in this case).

### Step 3: Using `.mock().using()` to Define Final Mock Behavior

**Automock provides a more declarative way to specify mock implementations using the `.mock().using()` method chain.
This allows us to define the mock behavior directly when setting up the `TestBed`.**

Here's how we can modify the test setup to use this approach:

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
defined the mock behavior directly in the test setup using `.mock().using()`. This functionality determines the final
behavior of the `getUsers` method, and cannot be changed anymore in the test suite.

### Step 5: Adding Stubs to `.mock().using()`

While the `.mock().using()` method provides a way to define the default, final behavior of the mocked method, we might
still want to add specific stubs to further control or monitor the behavior during tests.
Here's how we can achieve that:

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

## When to Prefer the Solitary Approach?

Choosing the right testing approach depends on various factors, including the nature of the unit under test and the
complexity of its interactions. The solitary approach is particularly well-suited for:

- **"Final" Classes**: Classes designed to stand alone or contain self-sufficient logic often benefit from solitary
  testing. This isolation allows for a focused evaluation of their behavior without external interference.

- **Classes with Minimal Dependencies**: Units that interact with one or two dependencies, especially those implementing
  well-defined interfaces, are prime candidates for solitary testing. This setup simplifies the mocking process and
  keeps the tests manageable and focused.

- **Specific Behavior Testing**: For units encapsulating specific, critical logic (e.g., algorithmic functions or core
  business rules), solitary testing ensures that these behaviors are thoroughly validated in isolation from
  unpredictable external factors.

Incorporating these considerations into your testing strategy enhances the effectiveness of your tests and ensures they
provide meaningful feedback on your code's design and functionality.
