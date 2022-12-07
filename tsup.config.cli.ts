import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['packages/dup/src/index.ts'],
    keepNames: true,
    name: 'cli',
    bundle: true,
    splitting: true,
    outDir: 'packages/dup/dist/',
    format: ['cjs', 'esm'],
    dts: true,
    shims: true,
    clean: true,
    treeshake: true,
  },
]);
