import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      'problems/**/*.{test,spec}.{js,ts}',
      'contest/**/*.{test,spec}.{js,ts}',
    ],
  },
})
