---
sidebar_position: 1
---

# Introduction

**Specially designed for Inversion of Control (IoC) and Dependency Injection (DI) scenarios, Automock seamlessly
integrates automatic mocking into various DI and testing frameworks. Automock's adaptability ensures a seamless and
effective testing experience, empowers you to isolate and test individual components with ease, enhancing the efficiency
and reliability of your unit testing journey.**

## Automock and The Essence of Unit Testing

Unit tests are pivotal in upholding code integrity and warding off potential issues. These tests frequently require the
mocking of dependencies to pinpoint and evaluate the behavior of distinct components. However, the manual orchestration
and management of these mock objects can be tedious, prone to mistakes, and quite challenging.

Automock is designed to streamline unit testing by automating the generation of mock objects for class dependencies.
With its seamless integration capabilities with renowned testing frameworks and dependency injection (DI) containers,
crafting reliable unit tests becomes a breeze, eliminating the intricacies of manual mock configurations. **With
Automock, you can:**

- Instantly produce mock objects tailored for class dependencies.
- Channel your efforts into crafting impactful test scenarios rather than getting bogged down with mock configurations.
- Maintain a uniform syntax and structure throughout your unit tests.
- Utilize type-accurate mocks that mirror the type attributes of genuine objects, bolstering code sustainability.

## Quick Example

To illustrate the fundamental principle of Automock, let's consider a simple scenario where you have a `UserService`
class that depends on a `Database` service for data retrieval.

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

## Embracing a Spectrum of Testing Frameworks and DI

| **DI Framework Adapter**                               | **Jest (`@automock/jest`)** | **Sinon (`@automock/sinon`)** |
|--------------------------------------------------------|-----------------------------|-------------------------------|
| **NestJS Adapter (`@automock/adapters.nestjs`)**       | :white_check_mark:          | :white_check_mark:            |
| **Inversify Adapter (`@automock/adapters.inversify`)** | :white_check_mark: (Beta)   | :white_check_mark: (Beta)     |
| **Ts.ED Adapter (`@automock/adapters.tsed`)**          | Soon                        | Soon                          |
| **TypeDI Adapter (`@automock/adapters.typedi`)**       | Soon                        | Soon                          |
