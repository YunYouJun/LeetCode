import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'unused-imports/no-unused-vars': 'off',
  },
})

// "parserOptions": {
//     "ecmaVersion": 2020
//   },
//   "env": {
//     "es6": true,
//     "node": true
//   },
//   "globals": {
//     "ListNode": true
//   },
//   "rules": {
//     "unused-imports/no-unused-vars": "off",
//     "no-unused-vars": "off",
//     "semi": [
//       "error",
//       "never"
//     ],
//     "no-console": "off"
//   }
