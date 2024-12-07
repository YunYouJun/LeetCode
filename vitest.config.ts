import { defineConfig } from 'vitest/config'

function r(path: string) {
  return new URL(path, import.meta.url).pathname
}

export default defineConfig({

  test: {
    alias: {
      '@/utils': r('./packages/utils/src/index.ts'),
      '@yunyoujun/leetcode-utils': r('./packages/utils/src/index.ts'),
    },
    include: [
      './problems/**/*.{test,spec}.{js,ts}',
      './contest/**/*.{test,spec}.{js,ts}',
      './custom/**/*.{test,spec}.{js,ts}',
    ],
  },
})
