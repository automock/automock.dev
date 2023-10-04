---
sidebar_position: 2
title: DI Identifiers
---

## The Concept of Identifiers

Throughout the Automock documentation, you'll encounter references to identifiers, guiding you on how to use them
effectively in different contexts. It's important to note that the usage and support for different types of identifiers
or metadata may vary from one adapter to another. Always refer to the specific adapter's documentation for detailed
information.

In this section, we'll use `Logger` and `UserService` as examples to illustrate the different types of identifiers and
their usage. The `@Inject` decorator is used to indicate that a dependency should be injected into a class. However, the
exact decorator might vary depending on the adapter you're using.

## Identifiers in Automock

In the realm of Dependency Injection, an identifier is a unique key used to retrieve a particular dependency from the DI
container. Automock extends this concept, allowing for flexible identifier usage tailored to various DI frameworks.

### Class-based Identifiers

These are actual TypeScript classes, serving both as blueprints for creating instances and as identifiers for fetching
specific dependencies.

```typescript
class UserApiService { ... }

class UserService {
  constructor(private usersApiService: UserApiService) {}
}
```

**To resolve or mock a class-based dependency, just use the class itself.**

```tsx title="UnitReference API"
const { unitRef } = TestBed.create(UserService).compile();
const userApiService = unitRef.get(UserApiService);
```

```tsx title="MockOverride API"
const { unit, unitRef } = TestBed.create(UserService)
  .mock(UserApiService)
  .using({ ... })
  .compile();
```

### Token-based Identifiers

Tokens, which can be strings or symbols, serve as unique keys to fetch specific dependencies from the container. They're
especially useful for distinguishing multiple instances of the same type or for non-class-based dependencies.

```typescript
interface Logger {
  log(message: string): void;
}
```

```typescript title="Using a Symbol Token"
const LoggerToken = Symbol('LoggerToken');

class UserService {
  constructor(@Inject(LoggerToken) private logger: Logger) {}
}
```

```typescript title="Using a String Token"
class UserService {
  constructor(@Inject('LoggerToken') private logger: Logger) {}
}
```

**Usage Example**

```tsx title="UnitReference API"
const { unitRef } = TestBed.create(UserService).compile();
const logger = unitRef.get<Logger>(LoggerToken);
```

```tsx title="MockOverride API"
const { unit, unitRef } = TestBed.create(UserService)
  .mock(UserApiService) // Using class-based identifier
  .using({ ... })
  .compile();
```


### Identifiers with Metadata

Automock allows for metadata inclusion alongside the primary identifier. Metadata offers additional context or
qualifiers for identifiers, granting more nuanced control over dependency retrieval. For instance, a service might have
multiple instances, each distinguished by specific metadata.

> :bulb: **Note:** Currently, only the InversifyJS adapter supports metadata.

Here's a simple InversifyJS metadata usage example:

```typescript
interface Weapon {
  name: string;
}

const throwable = tagged('canThrow', true);

class Ninja {
  constructor(
    @inject('Weapon') private katana: Weapon,
    @inject('Weapon') @throwable private shuriken: Weapon
  ) {}
}
```

In the example, `canThrow` is metadata that qualifies the identifier for more precise dependency resolution.

**Using with Automock:**

```typescript
const { unitRef } = TestBed.create(Ninja).compile();

const katanaDep = unitRef.get<Weapon>('Weapon');
const shurikenDep = unitRef.get<Weapon>('Weapon', { canThrow: true });
```
