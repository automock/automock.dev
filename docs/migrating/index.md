---
sidebar_position: 1
title: Migration Guide
description: Migration guide for Suites and Automock
---

# Migrating from Automock to Suites

## Introduction

**Automock has evolved into Suites, marking a significant step forward in our testing framework's capabilities and
scope.**
While Automock concluded its journey at version `2.1.0`, Suites picks up from version `2.2.0`, continuing the legacy
with enhanced features and broader support.

Although Automock and Suites are essentially the same at their core, Suites brings more advanced functionalities and
integrations. For continuity, Automock will still receive support for critical fixes.

**Further reading on the differences between Automock and Suites can be found in
the [Suites documentation](/docs/suites/introduction).**

## Migration Paths

### From Automock `1.x` to Suites `2.x`

1. **Uninstall Automock**:
  - Remove the old Automock package: `@automock`
  - Example: `npm uninstall @automock/jest @automock/adapter.nestjs`

2. **Install Suites Packages**:
  - Install the corresponding Suites packages: `@suites/jest` and `@suites/adapters.nestjs` (since Automock
    version `1.x`
    supported NestJS only).

3. **Add a TypeScript Alias**:

  - Set up a TypeScript alias in `tsconfig.json` to redirect imports from `@automock` to `@suites`. This is a temporary
    measure to ease the transition.

  - Example Alias Setup:
    ```json
    "compilerOptions": {
      "paths": {
        "@automock/*": ["node_modules/@suites/*"]
      }
    }
     ```

4. **Update Imports**:
  - Gradually update your codebase to replace imports from `@automock` to `@suites`.
  - Alternatively, you can automate this process by replacing the text in your files from `@automock` to `@suites`.

### From Automock `2.x` to Suites `2.x`

1. **Replacing Imports**:

- Directly replace all instances of `@automock` with `@suites` in your project files.
- This method is straightforward given the similarity in APIs between Automock 2.x and Suites 2.x.

2. **TypeScript Alias (Optional)**:

- As an interim solution, you can use the TypeScript alias method mentioned above to redirect imports.

3. **Adopt Suites Fully**:

- Transition to using `@suites` in all new code and gradually update existing code.

## Automock 2.2.0 and Beyond

- **Wrapper to Suites**: Automock `2.2.0` and subsequent versions will be released as wrappers to Suites. They will
  include deprecation warnings advising the transition to Suites.
- **Next Major Release**: Future major releases will be under the `@suites` scope exclusively.

## Historical Context and Tags

The real history of `@automock` scope: npm packages, and GitHub releases, and tags, will be preserved. However, starting
from version `2.2.0`, the focus will shift to `@suites` to reflect the change in scope and direction.
