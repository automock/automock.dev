---
sidebar_position: 2
---

# NestJS

Let's explore how Automock effortlessly handles various dependency injection scenarios within NestJS applications, also
known as "Custom Providers":

### 1. String Tokens

Automock harmoniously supports a wide range of injection tokens that NestJS provides. This includes string-based
injection tokens like `@Inject('CUSTOM_TOKEN')`:

```typescript
@Injectable()
export class UserService {
  constructor(@Inject('CUSTOM_TOKEN') private readonly customService: CustomService) {}
}
```

When using Automock, your custom injection tokens are accurately mocked, allowing you to seamlessly mock dependencies
specified using these tokens. To access the mocked dependency using `unitRef`, follow the example below:

```typescript
const {unitRef} = TestBed.create(UserService).compile();
const mockedCustomService = unitRef.get<CustomService>('CUSTOM_TOKEN');
```

The same approach applies when using the `.mock().using()` functionality:

```typescript
const { unitRef, unit } = TestBed.create(UserService)
  .mock<CustomService>('CUSTOM_TOKEN')
  .using({ ... })
  .compile();
```

### 2. Handling `forwardRef`

Automock adeptly handles scenarios involving `forwardRef`, an essential tool for managing circular dependencies.
Automock is equipped to handle both types and strings returned by the `forwardRef` callback:

```typescript
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {
  }
}
```

To access the dependency mocked by Automock using `unitRef`, use the following example:

```typescript
const {unitRef} = TestBed.create(UserService).compile();
const mockedUserService = unitRef.get(UserService);
```

The same approach applies when using the `.mock().using()` functionality:

```typescript
const {unitRef} = TestBed.create(UserService)
  .mock(UserService)
  .using({...})
  .compile();
```

### 3. Seamless Integration with Third-Party Libraries

NestJS often integrates with third-party libraries that introduce their own decorators and injection tokens. Automock
elegantly handles such scenarios. For example, when dealing with `@InjectRepository` from TypeORM, simply use the
appropriate native function, such as `getRepositoryToken`, to retrieve the mocked dependency:

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
  }
}
```

To access the dependency mocked by Automock using `unitRef`, use the following example:

```typescript
const {unitRef} = TestBed.create(UserService).compile();
const mockedUserRepository = unitRef.get<UserEntity>(getRepositoryToken(UserEntity) as string);
```

The same approach applies when using the `.mock().using()` functionality:

```typescript
const {unitRef} = TestBed.create(UserService)
  .mock<UserEntity>(getRepositoryToken(UserEntity) as string)
  .using({...})
  .compile();
```

### 4. Consistent Behavior for Constructor and Property Injection

Automock treats both constructor and property injections in the same way. Whether your dependencies are injected via the
constructor or properties, Automock ensures consistent and accurate mocking:

```typescript
@Injectable()
export class UserService {
  @Inject(CustomService)
  private readonly customService: CustomService;
}
```

### 5. Streamlined Testing Setup

Automock simplifies your testing setup by eliminating the need for the traditional `Test.createTestingModule` approach.
With Automock, the intricate configuration of test modules and manual mocking becomes redundant, allowing you to focus
on writing meaningful test cases.

Automock seamlessly integrates with NestJS, ensuring accurate dependency injection and efficient unit testing. By
supporting various injection token types, handling `forwardRef`, and accommodating third-party libraries, Automock
enables you to effortlessly isolate and test individual components within your NestJS applications. Step into the world
of Automock and experience enhanced NestJS unit testing today!