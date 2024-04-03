---
sidebar_position: 3
title: Migrating from Automock
description: Migrating from Automock to Suites
---

## Introduction

Automock has evolved into Suites, marking a significant leap forward in our quest to provide a comprehensive testing
framework. This transition from Automock's culmination at version `2.1.0` to Suites' inaugural launch at version `3.0.0`
brings forth expanded functionality and enhanced support.

- To facilitate a smooth transition, Automock will continue to receive critical fixes, but its development will cease
  with version `2.1.0`, making way for the future with Suites.

- For detailed insights into this transition, including comparisons and additional context, please refer to
  our [the shift from Automock to Suites](/docs/overview/the-shift-from-automock) documentation.

## Changes

Transitioning from Automock to Suites introduces minimal disruptions. The primary change involves the `TestBed`
factory's migration, which now resides within `@suites/unit` instead of the individual `@suites/jest` or `@suites/sinon`
packages, previously under `@automock`.

## Migration Paths

The migration to Suites is flexible, offering "Soft Migration" and "Hard Migration" options to accommodate various
project timelines and adaptation preferences.

### Soft Migration From All Versions of Automock

1. **Uninstall Automock Packages**
   - `npm uninstall @automock/jest` or `npm uninstall @automock/sinon`.
   - **For Automock `v2.x` Users**: Uninstall the `@automock/adapters.<adapter>` package.
   - **For Automock `v1.x` Users**: No further action is required at this step.

2. **Install Suites Packages** 

   Proceed to install the corresponding Suites packages: \
   `@suites/doubles.jest` (or `sinon`), `@suites/di.nestjs` (or `inversify`), and `@suites/unit`.

3. **Configure TypeScript Alias** \
  Implement a TypeScript alias under your root `tsconfig.json` file, to reroute `@automock` imports to `@suites`:

    ```json title="tsconfig.json"
    "compilerOptions": {
      "paths": {
        "@automock/jest": ["node_modules/@suites/unit"]
      }
    }
    ```

### Hard Migration From All Versions of Automock

1. **Uninstall Automock Packages**
   - `npm uninstall @automock/jest` or `npm uninstall @automock/sinon`.
   - **For Automock `v2.x` Users**: Uninstall the `@automock/adapters.<adapter>` package.
   - **For Automock `v1.x` Users**: No further action is required at this step.

2. **Install Suites Packages**

   Proceed to install the corresponding Suites packages: \
   `@suites/doubles.jest` (or `sinon`), `@suites/di.nestjs` (or `inversify`), and `@suites/unit`. Or just follow the
    [installation guide](/docs/installation) for a comprehensive overview.

3. **Update Imports**

   Use your IDE or text editor to replace all instances of `@automock/jest` with `@suites/unit`. This ensures future
   imports consistently utilize `@suites/unit`.

## Historical Releases, Tags and NPM Packages

The release history and tags under the `@automock` scope will be preserved for historical reference. However, from
version `3.0.0` onwards, the focus will shift to `@suites`, reflecting our new direction and expanded scope.
