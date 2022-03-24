# tsup-plugin-solid

[Tsup](https://github.com/egoist/tsup) plugin for [Solid](https://github.com/solidjs/solid). Uses [esbuild-plugin-solid](https://github.com/amoutonbrady/esbuild-plugin-solid) under the hood.

## Installation

```bash
pnpm add tsup-plugin-solid -D # or npm or yarn
```

# Usage

```ts
// tsup.config.js
import { defineConfig } from 'tsup'
import solidPlugin from 'tsup-plugin-solid'

export default defineConfig({
  entry: ['src/index.tsx'],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  plugins: [solidPlugin()],
})
```

## License

MIT