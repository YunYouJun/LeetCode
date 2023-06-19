import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@yunyoujun/leetcode-utils': './packages/utils/src/index.ts',
    },
    include: [
      './problems/**/*.{test,spec}.{js,ts}',
      './contest/**/*.{test,spec}.{js,ts}',
    ],
  },
})
