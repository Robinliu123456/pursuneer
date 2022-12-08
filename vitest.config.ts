import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@pursuneer/shared': resolve(__dirname, 'packages/shared/src/index.ts'),
    },
  },
});
