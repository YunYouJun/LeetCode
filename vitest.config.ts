import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@/utils': './packages/utils/src/index.ts',
      '@yunyoujun/leetcode-utils': './packages/utils/src/index.ts',
    },
    include: [
      './problems/**/*.{test,spec}.{js,ts}',
      './contest/**/*.{test,spec}.{js,ts}',
    ],
  },
})
