# LeetCode

[![LeetCode TOC](https://github.com/YunYouJun/LeetCode/workflows/LeetCode%20TOC/badge.svg)](https://github.com/YunYouJun/LeetCode/actions?query=workflow%3A%22LeetCode+TOC%22)

> 用优雅的方式刷题吧！

[LeetCode](https://leetcode-cn.com) Practice [TOC 目录](https://yunyoujun.github.io/LeetCode/)

## Language

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>

- JavaScript
- TypeScript
- Python3

## Usage

### Generate TOC

```sh
npm run generate:TOC
```

### Lint

[ESLint](https://eslint.org/)

- husky
- lint-staged

```sh
npm run lint
```

## packages

- [cli: @yunyoujun/leetcode](./packages/cli): [![npm (scoped)](https://img.shields.io/npm/v/@yunyoujun/leetcode)](https://www.npmjs.com/package/@yunyoujun/leetcode)

## FAQ

- [x] vitest bug [RangeError: Maximum call stack size exceeded](https://github.com/vitest-dev/vitest/issues/3060)
  - Caused by `.env`. `PYTHONPATH=${workspaceFolder}:${PYTHONPATH}`

## Ref

- [高频题 - CodeTop](https://codetop.cc/)
