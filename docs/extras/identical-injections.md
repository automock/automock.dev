---
sidebar_position: 3
title: Handling Identical Injections
---

# Handling Multiple Injections of the Same Class

When employing Automock to mock dependencies within a class, it's possible to encounter scenarios where the same class
is injected multiple times. Automock adeptly handles such situations by automatically generating mocks for all instances
of the dependency. However, a subtle complexity arises when accessing these dependencies through `unitRef`. In this
context, Automock perceives indistinguishable dependencies as a unified entity. As a result, when employing `unitRef`,
it provides access solely to the first injected dependency associated with that token or class, regardless of its
multiplicity.

This characteristic also extends to the `.mock().using()` functionality. Automock's treatment of identical dependencies
maintains a consistent pattern regardless of the mocking approach employed.

The foundation for this behavior lies in Automock's current limitation to distinctly segregate multiple injections of
the same class. Consequently, direct access to subsequently injected dependencies via `unitRef` or the `.mock().using()`
functionality is constrained.

To surmount this limitation and ensure unfettered access to all injected dependencies, it's recommended to establish
unique identifiers for each injection. One pragmatic approach involves the utilization of custom tokens during the
injection process. The custom injection decorator, tailored to the specific DI framework, in conjunction with a bespoke
token, empowers both the DI container and Automock to differentiate between and precisely access distinct dependencies.

**Illustratively, consider a `UserService` class featuring two `Database` dependencies. To differentiate between these
dependencies, custom tokens `DATABASE_1` and `DATABASE_2` are employed during the injection process.**

```typescript
import { Injectable, Inject } from '@nestjs/core';
import { TestBed } from '@suites/jest';

class UserService {
  public constructor(
    @Inject('DATABASE_1') private readonly database1: Database,
    @Inject('DATABASE_2') private readonly database2: Database,
  ) {}

  public async getUsers() {
    const users1 = await this.database1.getUsers();
    const users2 = await this.database2.getUsers();

    return [...users1, ...users2];
  }
}
```

It's essential to recognize that the methodology for implementing custom tokens through the custom injection decorator
(which is often symbolized as `@Inject` in diverse DI frameworks) may manifest variances across different DI frameworks.
Nonetheless, the core concept of deploying custom tokens to differentiate among multiple injections remains a cardinal
principle upheld by various DI frameworks, thereby ensuring consistent support across different frameworks.
