---
sidebar_position: 3
---

# Inversify

The Inversify adapter for Automock seamlessly integrates with the Inversify dependency injection framework, allowing you
to effortlessly mock and manage class dependencies in your unit tests.

## Supported Decorators

Automock's Inversify adapter supports various Inversify DI decorators, enabling you to mock and manage dependencies
created using these decorators.

### `@inject()`

The `@inject()` decorator in Inversify indicates a dependency to be injected. This decorator supports symbols, strings,
and classes (types) as tokens. When using the standalone `@inject()` decorator without any combination of other
decorators, you can directly use the same token you used in the `@inject()` decorator to mock and retrieve the
dependency.

To mock and retrieve a dependency specified using the `@inject()` decorator, simply use the `.mock()` and `.get()`
methods:

```typescript
class UserService {
  public constructor(
    @inject(Database) private readonly database: Database,
    @inject('Logger') private readonly logger: Logger
  ) {}
}

const { unitRef } = TestBed.create(UserService).compile();

const mockedDatabase = unitRef.get(Database);
const mockedLogger = unitRef.get('Logger');
```

### Contextual Bindings and `@targetName()`

When dealing with contextual bindings and the `@targetName()` decorator, you need to use metadata identifiers to specify
the context. In this case, use the `name` field in the metadata object.

To mock and retrieve a dependency with a contextual binding and the `@targetName()` decorator, provide the metadata
identifier using the `name` field in the `.mock()` and `.get()` methods:

```typescript
import { mock, TestBed } from '@automock/inversify';
import { Weapon } from './weapon.interface';

// Mock and Retrieve Weapon dependency with contextual binding
const {unitRef} = TestBed.create(Weapon)
  .mock(Weapon)
  .using({name: 'shuriken'})
  .compile();

const mockedShuriken = unitRef.get<Weapon>('Weapon', {name: 'shuriken'});
```

### Named Bindings and `@named()`

Named bindings in Inversify can be handled by using metadata identifiers. To mock and retrieve dependencies with named
bindings, use the `named` field in the metadata object.

To mock and retrieve a dependency with a named binding and the `@named()` decorator, provide the metadata identifier using
the `named` field in the `.mock()` and `.get()` methods:

```typescript
import { mock, TestBed } from '@automock/inversify';
import { Weapon } from './weapon.interface';

// Mock and Retrieve Weapon dependency with named binding
const {unitRef} = TestBed.create(Weapon)
  .mock(Weapon)
  .using({named: 'weak'})
  .compile();

const mockedWeakWeapon = unitRef.get<Weapon>('Weapon', {named: 'weak'});
```

### Tagged Bindings and `@tagged`

Automock's Inversify adapter also supports tagged bindings. To mock and retrieve dependencies with tagged bindings, use
the metadata identifiers in the `mock()` and `get()` methods.

To mock and retrieve a dependency with a tagged binding and the `@tagged` decorator, provide the metadata identifier
using the corresponding field in the `mock()` and `get()` methods:

```typescript
import { mock, TestBed } from '@automock/inversify';
import { Weapon } from './weapon.interface';

// Mock and Retrieve Weapon dependency with tagged binding
const {unitRef} = TestBed.create(Weapon)
  .mock(Weapon)
  .using({canThrow: true})
  .compile();

const mockedThrowableWeapon = unitRef.get<Weapon>('Weapon', {canThrow: true});
```
