---
sidebar_position: 2
---

# NestJS

In this page, we'll embark on a deep dive into the capabilities of the Automock adapter for NestJS. From handling
various injection tokens to effortlessly integrating with third-party libraries, we'll explore how Automock enhances the
unit testing experience for NestJS developers. So, whether you're a seasoned NestJS veteran or just getting started,
this doc aims to equip you with the knowledge to harness the full potential of Automock in your testing endeavors.

### Injection Tokens

Automock seamlessly supports a wide range of injection tokens provided by NestJS, including string-based, class-based
and symbol-based injection tokens:

```typescript
@Injectable()
class UserService {
  constructor(@Inject('CUSTOM_TOKEN') private customService: CustomService) {}
}
```

```typescript
const TokenSymbol = Symbol.for('CUSTOM_TOKEN');

@Injectable()
class UserService {
  constructor(@Inject(TokenSymbol) private customService: CustomService) {}
}
```

```typescript
// Suppose we have a logger interface
interface Logger { ... }

// And a concrete logger class
class ConcreteLoggerClass implements Logger { ... }

@Injectable()
export class UserService {
  constructor(@Inject(ConcreteLoggerClass) private logger: Logger) {}
}
```

When using Automock, your custom injection tokens are accurately mocked, enabling you to effortlessly mock dependencies
specified using these tokens. To access the mocked dependency using `unitRef`, follow the example below:

```typescript
const { unitRef } = TestBed.create(ClassUnderTest).compile();
const mockedCustomService = unitRef.get<CustomService>('CUSTOM_TOKEN');
```

The same approach applies when using the `.mock().using()` functionality:

```typescript
const { unitRef, unit } = TestBed.create(UserService)
  .mock<CustomService>('CUSTOM_TOKEN')
  .using({ ... })
  .compile();
```

### Handling `forwardRef` Tokens

Automock adeptly handles scenarios involving `forwardRef`, an essential tool for managing circular dependencies.
Automock is equipped to handle types, strings and symbols returned by the `forwardRef` callback:

```typescript
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService)) private userService: UserService,
  ) {}
}
```

> :bulb: **Note:** The same applies to string and symbols.

To access the dependency mocked by Automock using `unitRef`, use the following example:

```typescript
const { unitRef } = TestBed.create(UserService).compile();
const mockedUserService = unitRef.get(UserService);
```

The same approach applies when using the `.mock().using()` functionality:

```typescript
const { unitRef } = TestBed.create(UserService)
  .mock(UserService)
  .using({ ... })
  .compile();
```

### Seamless Integration with Third-Party Libraries

NestJS often integrates with third-party libraries that introduce their own decorators and injection tokens. Automock
elegantly handles such scenarios. For example, when dealing with `@InjectRepository` from TypeORM, simply use the
appropriate native function, such as `getRepositoryToken`, to retrieve the mocked dependency:

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
}
```

To access the dependency mocked by Automock using `unitRef`, use the following example:

```typescript
const { unitRef } = TestBed.create(UserService).compile();
const mockedUserRepository = unitRef.get<Repository<UserEntity>>(getRepositoryToken(UserEntity) as string);
```

The same approach applies when using the `.mock().using()` functionality:

```typescript
const { unitRef } = TestBed.create(UserService)
  .mock<Repository<UserEntity>>(getRepositoryToken(UserEntity) as string)
  .using({ ... })
  .compile();
```

### Consistent Behavior for Constructor and Property Injection

Automock treats both constructor and property injections in the same way. Whether your dependencies are injected via the
constructor or properties, Automock ensures consistent and accurate mocking:

```typescript
@Injectable()
export class UserService {
  @Inject(CustomService)
  private readonly customService: CustomService;
}
```

### Streamlined Testing Setup

Automock simplifies your testing setup by eliminating the need for the traditional `Test.createTestingModule` approach.
The intricate configuration of test modules and manual mocking becomes redundant, allowing you to focus on writing
meaningful test cases.