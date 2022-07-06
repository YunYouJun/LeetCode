import fs from 'node:fs'
import path from 'node:path'

const leetcode_url = 'https://leetcode-cn.com/problems/'
const github_url = 'https://github.com/YunYouJun/LeetCode/tree/master/'

import { Problem } from "./types";

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
    const info = require(`${rootFolder}/${problemsPath}/${problemFolder}/package.json`)
    problems.push(info)
  })

  // 按序号升序排序
  problems.sort((a, b) => {
    return a.id - b.id
  })

  return problems
}

/**
 * read language by ext
 * @param {*} problem
 */
export function readLanguageByExt(problem: Problem) {
  let extname = new Set<string>()
  let problem_path = 'problems/' + problem.index
  let files = fs.readdirSync(problem_path)
  for (const file of files) {
    extname.add(path.extname(file).slice(1))
  }
  return [...Array.from(extname)].join('/')
}

/**
 * return problem info by id
 *
 * @param {*} id
 * @returns
 */
export function getProblemById(id: string, problems: Problem[]) {
  return problems.find((problem) => {
    return problem.id === parseInt(id)
  })
}

/**
 *  return md by problem info
 * @param {*} problem
 */
export function generateProblemMd(problem: Problem) {
  return `|${problem.id}|[${problem.title}](${leetcode_url + problem.index})|[${
    problem.index
  }](${github_url + 'problems/' + problem.index})|${problem.difficulty}|${
    problem.language
  }|\n`
}
