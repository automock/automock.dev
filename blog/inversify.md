---
sidebar_position: 4
title: InversifyJS (Beta)
---

# InversifyJS

In the previous section of [Identifiers](/docs/adapters/identifiers), you got a sense of how identifiers and 
injection tokens are handled with Automock. InversifyJS has the concepts of different bindings and custom decorators 
that might be used while working with the DI container. This guide will walk through the extras that InversifyJS 
bring, and how Automock integrates to them.

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

:::info
Multi inject work the exactly the same like the `@inject` decorator, refer to the [Token-based injection](/docs/adapters/identifiers?automock-adapter=inverisfyjs#token-based-injection)
:::

> :books: Read more about [multi-injection](https://github.com/inversify/InversifyJS/blob/master/wiki/multi_injection.md) in the InversifyJS documentation.

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
