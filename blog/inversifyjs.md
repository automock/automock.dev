---
sidebar_position: 3
title: InversifyJS Identifiers
---

# Handling InversifyJS Identifiers

InversifyJS has the concepts of different bindings and custom decorators that might be used while working with the DI
container. This guide will walk through the extras that InversifyJS bring, and how Automock integrates to them.

## Multi-Inject Tokens

For scenarios where multiple implementations of a dependency are required, InversifyJS provides the `@multiInject`
decorator.

**Example:**

```typescript
interface Weapon { ... }

@injectable()
export class Samurai {
  public constructor(@multiInject('Weapon') private weapons: Weapon[]) {}
}
```

`@multiInject` decorator work exactly the same as the `@inject` decorator, refer to
the [Token-based injection](/docs/adapters/identifiers?automock-adapter=inverisfyjs#token-based-injection)

> :books: Read more
> about [multi-injection](https://github.com/inversify/InversifyJS/blob/master/wiki/multi_injection.md) in the InversifyJS
> documentation.

## Handling Injections with Metadata


### Tagged Bindings

Tagged bindings are used to differentiate between multiple bindings of the same service. For example:

```typescript
@injectable()
class Ninja {
  public constructor(
    @inject("Weapon") @tagged("canThrow", false) private katana: Weapon,
    @inject("Weapon") @tagged("canThrow", true) private shuriken: Weapon
  ) {}
}
```

You can handle these bindings by specifying the injection token and the corresponding metadata like so:

```typescript
unitRef.get('Weapon', {canThrow: false})
.mock('Weapon', {canThrow: false}).using(...)
```

### Named Bindings

Named bindings allow you to associate a specific name with a binding. This is useful when you want to differentiate
between multiple bindings of the same type.

```typescript
@injectable()
class Weapon { ... }

@injectable()
class Samurai {
  constructor(@inject('Weapon') @named('katana') private weapon: Weapon) {}
}
```

You can handle these bindings by specifying the injection token and the corresponding metadata like so:

```typescript
unitRef.get('Weapon', {canThrow: false})
.mock('Weapon', {canThrow: false}).using(...)
```

> :books: Read more about [named bindings](https://github.com/inversify/InversifyJS/blob/master/wiki/named_bindings.md)
> in the InversifyJS documentation.

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

> :books: Read more
> about [custom tag decorators](https://github.com/inversify/InversifyJS/blob/master/wiki/custom_tag_decorators.md) in the
> InversifyJS documentation.

### Contextual Bindings

Contextual bindings in InversifyJS provide a way to conditionally resolve bindings based on the context in which they
are requested. This allows for more dynamic and flexible dependency resolution.

```typescript
@injectable()
class Ninja implements Ninja {
  // ...
}
```

Automock can handle these using the `targetName` metadata:

```typescript
unitRef.get('Weapon', {targetName: 'katana'})
.mock('Weapon', {targetName: 'katana'}).using(...)
```

> :books: Read more
> about [contextual bindings](https://github.com/inversify/InversifyJS/blob/master/wiki/contextual_bindings.md) in the
> InversifyJS documentation.

### Unmanaged Dependencies

For unmanaged dependencies, you can use the `unmanaged` metadata:

```typescript
class Something {
  public constructor(@unmanaged private dep: SomeClass) {}
}
```

In Automock:

```typescript
unitRef.get(SomeClass, { unmanaged: true })
.mock('SomeClass', { unmanaged: true }).using(...)
```

## Additional Considerations

**Injection Token Priority:** When both class and injection tokens are present, the injection token takes precedence.
For instance:

```typescript
class Weapon { ... }

class Service {
  public constructor(@inject("Weapon") @targetName("katana") katana: Weapon) {}
}
```

In this case, `unitRef.get('Weapon')` is valid, while `unitRef.get(Weapon)` is not.

**Base Identifier Resolution:** It's possible to resolve dependencies using only the base identifier (class or
injection token), without metadata. This approach is valid but may require metadata for precise targeting in cases
with multiple corresponding dependencies.


