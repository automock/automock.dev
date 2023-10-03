---
sidebar_position: 4
title: InversifyJS (Beta)
---

# InversifyJS

InversifyJS is a powerful and lightweight inversion of control (IoC) container for JavaScript and TypeScript
applications.
It offers a rich set of features to manage dependencies in a flexible and efficient manner.
Automock's InversifyJS adapter seamlessly integrates with InversifyJS, allowing you to mock dependencies and write unit
tests with ease.

Before you begin, make sure to install the `@automock/inversify` package:

```bash npm2yarn
npm install @automock/adapters.inversify
```

Also, we recommend reading the [identifiers](/identifiers.mdx) section in the documentation.

## Introduction

InversifyJS is a powerful and lightweight inversion of control (IoC) container for JavaScript and TypeScript
applications.
It offers advanced features like custom tag decorators, named bindings, and multi-injections, which can be
used to fine-tune dependency resolution.

Automock's InversifyJS's adapter builds on these features, offering an intuitive API to automatically mock these
dependencies, making unit testing more straightforward and efficient.

## Dependency Injection Scenarios

### Basic Constructor Injection

InversifyJS supports constructor injection, allowing dependencies to be injected directly into the constructor of a
class.

**Example:**

```typescript
@injectable()
class Weapon { ... }

@injectable()
class Samurai {
  constructor(private weapon: Weapon) {}
}
```

This is a classic case, and the corresponding identifier is class-based identifier


> :books: Read more
> about [constructor injection](https://github.com/inversify/InversifyJS/blob/master/wiki/constructor_injection.md) in the
> InversifyJS documentation.

### Using Symbol/String-Based Tokens
In addition to the class constructor injection, InversifyJS also supports symbol-based and string-based tokens.

**Example:**

```typescript
interface Weapon { ... }

@injectable()
class Samurai {
  constructor(@inejct('Weapen') private weapon: Weapon) {}
}
```

Or using a symbol-based token:

```typescript
interface Weapon { ... }

const WeapenToken = Symbol('WeapenToken');

@injectable()
class Samurai {
	constructor(@inejct(WeapenToken) private weapon: Weapon) {}
}
```

### Named Bindings
Named bindings in InversifyJS allow you to associate a specific name with a binding. This is useful when you want to
differentiate between multiple bindings of the same type.

```typescript
@injectable()
class Weapon { ... }

@injectable()
class Samurai {
  constructor(@inject('Weapon') @named('katana') private weapon: Weapon) {}
}
```

> :books: Read more about [named bindings](https://github.com/inversify/InversifyJS/blob/master/wiki/named_bindings.md) in the InversifyJS documentation.

### Multi-Injection

For scenarios where multiple implementations of a dependency are required, InversifyJS provides the `@multiInject`
decorator.

**Example:**

```typescript
interface Weapon { ... }

@injectable()
class Samurai {
  public constructor(@multiInject('Weapon') weapons: Weapon[]) {}
}
```

> :books: Read more about [multi-injection](https://github.com/inversify/InversifyJS/blob/master/wiki/multi_injection.md) in the InversifyJS documentation.


### Custom Tag Decorators

InversifyJS allows for advanced dependency injection patterns using custom tag decorators. These decorators add specific
metadata to the classes and their properties, guiding the IoC container on how to resolve the dependencies.

**Example:**

```typescript
const throwable = tagged('canThrow', true);
const notThrowable = tagged('canThrow', false);

@injectable()
class Ninja {
  constructor(
    @inject('Weapon') @notThrowable private katana: Weapon,
    @inject('Weapon') @throwable private shuriken: Weapon
  ) {}
}
```

> :books: Read more about [custom tag decorators](https://github.com/inversify/InversifyJS/blob/master/wiki/custom_tag_decorators.md) in the InversifyJS documentation.

### Contextual Bindings

Contextual bindings in InversifyJS provide a way to conditionally resolve bindings based on the context in which they
are requested. This allows for more dynamic and flexible dependency resolution.

```typescript
interface Weapon { ... }

@injectable()
class Samurai {
  constructor(@inject('Weapon') @targetName('katana') private weapon: Weapon) {}
}
```

> :books: Read more about [contextual bindings](https://github.com/inversify/InversifyJS/blob/master/wiki/contextual_bindings.md) in the InversifyJS documentation.


### Lazy Loading and Circular Dependencies

> :books: Read more about [circular dependencies](https://github.com/inversify/InversifyJS/blob/master/wiki/circular_dependencies.md) in the InversifyJS documentation.
