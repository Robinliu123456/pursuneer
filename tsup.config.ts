import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['packages/dup/index.ts'],
    bundle: true,
    splitting: true,
    outDir: 'packages/dup/dist',
    format: ['cjs', 'esm'],
    dts: true,
    shims: true,
  },
]);
