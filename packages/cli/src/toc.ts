import path from 'node:path'
import process from 'node:process'
import fs from 'fs-extra'

import type { Problem } from './types'

const leetcode_url = 'https://leetcode-cn.com/problems/'
const github_url = 'https://github.com/YunYouJun/LeetCode/tree/master/'

/**
 * 获取当前已完成的所有题目信息
 */
export function getAllProblems() {
  const rootFolder = process.cwd()
  const problemsPath = './problems'

  let problemsFolder = fs.readdirSync(problemsPath)

  const problems: Problem[] = []

  // 过滤非文件夹文件
  problemsFolder = problemsFolder.filter((filename) => {
    const stats = fs.statSync(`${problemsPath}/${filename}`)
    return stats.isDirectory()
  })

  problemsFolder.forEach((problemFolder) => {
    const info = fs.readJsonSync(
      `${rootFolder}/${problemsPath}/${problemFolder}/package.json`,
    )
    problems.push(info)
  })

  // 按序号升序排序
  problems.sort((a, b) => {
    return (a.id as number) - (b.id as number)
  })

  return problems
}

/**
 * read language by ext
 * @param {*} problem
 */
export function readLanguageByExt(problem: Problem) {
  const extname = new Set<string>()
  const problem_path = `problems/${problem.index}`
  const files = fs.readdirSync(problem_path)
  for (const file of files)
    extname.add(path.extname(file).slice(1))

  return [...Array.from(extname)].join('/')
}

/**
 * return problem info by id
 *
 * @param {*} id
 */
export function getProblemById(id: string, problems: Problem[]) {
  return problems.find((problem) => {
    return problem.id === Number.parseInt(id)
  })
}

/**
 *  return md by problem info
 * @param {*} problem
 */
export function generateProblemMd(problem: Problem) {
  return `|${problem.id}|[${problem.title}](${leetcode_url + problem.index})|[${
    problem.index
  }](${`${github_url}problems/${problem.index}`})|${problem.difficulty}|${
    problem.language
  }|\n`
}
