import fs from 'node:fs'
import inquirer from 'inquirer'

import { getAllProblems } from './toc'
import { logger } from './logger'

import { $ } from 'zx'

const problemsFolder = './problems'
// all problems info
const problems = getAllProblems()

import { categoryMap } from './common'
const choices = Object.keys(categoryMap).map((key) => {
  return {
    name: categoryMap[key].name,
    value: key,
  }
})

import { Problem } from './types'

/**
 * 提交到 Git
 * @param {*} problem
 */
export async function pushSolvedProblem(problem: Problem) {
  await $`git add -A`
  await $`git commit -m "✅ solve ${problem.index}"`
  await $`git push`
}

/**
 * 写入题目信息 package.json
 * @param {*} info 题目信息
 */
export function writeProblemInfo(info: Problem) {
  const problemFolder = `${problemsFolder}/${info.index}`
  if (!fs.existsSync(problemFolder)) {
    fs.mkdirSync(problemFolder)
  }
  fs.writeFileSync(
    `${problemFolder}/package.json`,
    JSON.stringify(info, null, 2)
  )

  const templateText = getTemplateByLanguage(info.language)
  if (templateText)
    fs.writeFileSync(`${problemFolder}/solution.${info.language}`, templateText)
}

/**
 * 获取语言对应模板
 * @param {string} language
 */
export function getTemplateByLanguage(language: string) {
  const template = `templates/solution.${language}`
  if (fs.existsSync(template)) {
    return fs.readFileSync(template, 'utf-8')
  } else {
    logger.error(`检查模版文件夹或对应语言模版 ${template} 是否存在！`)
  }
}

/**
 * prompt for category
 * @returns
 */
export async function promptCategory() {
  const questions = [
    {
      type: 'list',
      name: 'category',
      message: '题目类型',
      choices,
    },
  ]

  const answers = await inquirer.prompt(questions)
  return answers.category
}

export async function promptID(category = 'leetcode') {
  const questions = [
    {
      type: 'input',
      name: 'id',
      message: '请输入题目 ID（序号）:',
    },
  ]

  if (categoryMap[category].id.type === 'number') {
    questions[0].validate = (val) => {
      if (Number.isInteger(parseInt(val))) {
        return true
      } else {
        return '题目 ID 应当是一个整数'
      }
    }
  }

  const answers = await inquirer.prompt(questions)
  return answers.id
}

/**
 * 根据 ID 查找问题
 * @param {*} id
 * @param {*} category
 * @returns
 */
export function findProblemByID(id: string, category = 'leetcode') {
  return problems.find((problem) => {
    let isValidId = false
    let isValidCategory = problem.category === category

    if (categoryMap[category].id.type === 'number') {
      isValidId = problem.id === parseInt(id)
    } else {
      isValidId = problem.id === id
    }

    if (category === 'leetcode') {
      isValidCategory = true
    }

    return isValidCategory && isValidId
  })
}
