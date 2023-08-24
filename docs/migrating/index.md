---
sidebar_position: 1
title: Migrating to v2
---

# Migrating from v1.x to v2.0

Transitioning from Automock v1.0 to v2.0 brings several enhancements aimed at improving the developer experience,
robustness, and flexibility of the library. One of the key changes is the improved error handling, which now provides
more specific and informative error types, making it easier to debug issues. The JSDoc documentation has also been
enhanced for better clarity and understanding of the API. While there have been internal changes across various packages
like `@automock/adapters.nestjs`, `@automock/core`, `@automock/common`, and `@automock/types`, these are transparent to
the end-user. The `@automock/jest` package seamlessly handles these internal changes, ensuring a smooth user experience.

## Manual Installation of NestJS Adapter

In Automock v1.0, the NestJS adapter was bundled by default. Starting from v2.0, it needs to be installed manually. To
install it, run:

```bash
npm install @automock/adapters.nestjs --save-dev
```

or

```bash
yarn add @automock/adapters.nestjs --dev
```

## Key Changes in v2.0.0

Here are some critical changes to be aware of:

- **Interface Removals**: Several interfaces have been either removed or refactored, including but not limited to:
    - `ClassDependencies`
    - `ClassCtorInjectables`
    - `ClassInjectableProperty`
    - `ClassPropsInjectables`
    - `ClassDependenciesMap`
    - `DependenciesReflector`

- **Terminology Updates**: The term "PrimitiveValue" has been renamed to "ConstantValue".

- **Enhanced Error Handling**: Error types have been updated for better debugging. For example, `UnitReference.get()`
  now throws an `InvalidIdentifierError` instead of a generic `Error`.

For a comprehensive list of changes, it's highly recommended to read the [release notes for v2.0.0](#).

## Conclusion

The migration from v1.0 to v2.0 is designed to make Automock more robust, flexible, and user-friendly. Although there
are internal changes, these are abstracted away by the `@automock/jest` package, making the transition smooth. If you
encounter any issues or have questions, feel free to consult the updated documentation or seek community support.

Thank you for using Automock, and we hope you find the new features and improvements in v2.0 beneficial for your testing
needs!