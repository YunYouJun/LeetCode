import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
)
