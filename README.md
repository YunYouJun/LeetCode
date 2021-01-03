# LeetCode

![LeetCode TOC](https://github.com/YunYouJun/LeetCode/workflows/LeetCode%20TOC/badge.svg)

[LeetCode](https://leetcode-cn.com) Practice [TOC 目录](https://yunyoujun.cn/LeetCode/)

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
yarn generate:TOC
```

### Lint

[ESLint](https://eslint.org/)

- husky
- lint-staged

```sh
yarn lint
```

## Cli

### Link Cli

```sh
yarn link
```

### 开始解题

```sh
leet start
```

跟随提示，输入题目 ID，标题，索引，难易度，将会自动建立对应文件夹并记录信息至 `package.json`。

### 解题完毕

```sh
leet solve
```

输入对应题目 ID，将会通过自动提交带有题目信息的 git commit。
