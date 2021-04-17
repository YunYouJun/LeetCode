# @yunyoujun/leetcode

[![npm (scoped)](https://img.shields.io/npm/v/@yunyoujun/leetcode)](https://www.npmjs.com/package/@yunyoujun/leetcode)

LeetCode 做题脚本工具

## Install

```bash
yarn add @yunyoujun/leetcode
# yarn global add @yunyoujun/leetcode
```

配置 `package.json`

```json
{
  "scripts": {
    "generate": "leet generate",
    "start": "leet start",
    "solve": "leet solve"
  }
}
```

## 开始解题

```sh
# yarn start
leet start
```

跟随提示，输入题目 ID，标题，索引，难易度，将会自动建立对应文件夹并记录信息至 `package.json`。

## 解题完毕

```sh
# yarn solve
leet solve
```

输入对应题目 ID，将会通过自动提交带有题目信息的 `commit`。

如：`git commit -m "✅ solve palindrome-number"`

## 生成目录

```sh
# yarn generate
leet generate
```

## 题目类型

- `lcof`: 剑指 Offer
- `leetcode`: LeetCode
- `lcp`: 力扣杯
- `custom`: 自定义
