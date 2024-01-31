`vitest` by default uses `esbuild` as a Typescript interpreter under the hood. This is great and fast but esbuild doesn't
support `emitDecoratorMetadata` which Nest extensively uses to know how to inject providers into each other. To fix this,
you can tell `vitest` to use `@swc/core` through a plugin, which does support the `emitDecoratorMetadata` option, allowing
`vitest` to still be the test runner of choice.