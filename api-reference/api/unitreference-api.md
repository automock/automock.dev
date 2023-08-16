---
sidebar_position: 5
description: 'The `UnitReference` API is an interface that offers methods to access and interact with the mocked dependencies of the
class under test.'
---

# UnitReference API

Source package: `@automock/core`

The `UnitReference` API is an interface that offers methods to access and interact with the mocked dependencies of the
class under test.

### `.get<TDependency>(identifier: Type<TDependency>): StubbedInstance<TDependency>`

The `.get()` method enables you to fetch a mocked instance of the specified class type. It requires the `identifier`
parameter, representing the class type of the dependency you want to retrieve. This method returns a `StubbedInstance`
of the designated class, which allows seamless interaction with the mocked dependency.

**Example:**

```typescript
const { unitRef } = TestBed.create(ClassUnderTest).compile();
const mockedDep = unitRef.get(MockedDependency);
```

---

### `.get<TDependency>(identifier: string | symbol): StubbedInstance<TDependency>`

The `.get()` method also permits retrieval of a mocked instance based on a provided token. Supply the `identifier`
parameter, which stands for the token linked to the dependency to be retrieved. This function returns
a `StubbedInstance` of the specified class associated with the provided token.

**Example:**

```typescript
const { unitRef } = TestBed.create(ClassUnderTest).compile();
const mockedDep = unitRef.get<TDependency>('CUSTOM_TOKEN');
```

---

### `.get<TDependency>(identifier: string | symbol, metadata: IdentifierMetadata): StubbedInstance<TDependency>`

> :bulb: **Note:** availability might vary depending on the installed Automock adapter. Check the documentation
of the installed adapter for more details.

The `.get()` method also allows retrieval of a mocked instance using both a provided token and reference metadata. Use the
`identifier` parameter for the token linked to the dependency and include a metadata object. This metadata reference
provides a detailed way for Automock to distinguish various class dependencies.

Different adapters may suggest distinct interfaces for `IdentifierMetadata`, tailored to their specific needs. Check the
documentation of the installed adapter for precise details.

The method then returns a `StubbedInstance` of the specified class associated with the provided token.

**Example:**

```typescript
const { unitRef } = TestBed.create(ClassUnderTest).compile();
const mockedDep = unitRef.get<TDependency>('CUSTOM_TOKEN', { canFly: false });
```

### `.get(identifier: string | symbol): ConstantValue`

The `.get()` method allows you to retrieve constant values associated with a provided identifier, which can be either a
string or a symbol. This is useful when you need to access configuration settings or other constants within your unit
tests.

**Example:**

```typescript
const { unitRef } = TestBed.create(ClassUnderTest).compile();
const value = unitRef.get<string[]>('CONSTANT_VAL_TOKEN');
```

### Return Types

The `.get()` method returns a `StubbedInstance` object, which is a type defined by the `@automock/types` package.
However, the actual implementation of `StubbedInstance` may differ depending on the package used, such
as `@automock/jest` or `@automock/sinon`.

When using `@automock/jest`, the `StubbedInstance` is equivalent to `jest.Mocked`, which is a type provided by Jest for
creating mocked instances of classes. On the other hand, when using `@automock/sinon`, the `StubbedInstance` is
equivalent to `SinonStubbedInstance`, which is a type provided by Sinon.JS for creating stubbed instances of classes.

The difference in return types is handled automatically by Automock based on the package being used, ensuring seamless
integration with both Jest and Sinon.JS for your unit testing needs.