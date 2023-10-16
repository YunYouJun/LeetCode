import process from 'node:process'
import path from 'node:path'
import { program } from 'commander'
import inquirer from 'inquirer'

import chalk from 'chalk'
import fs from 'fs-extra'
import consola from 'consola'
import pkg from '../package.json'
import {
  findProblemByID,
  findProblemByIndex,
  promptCategory,
  promptID,
  pushSolvedProblem,
  writeProblemInfo,
} from './utils'

import { logger } from './logger'

import { generateToc } from './generateTOC'
import { categoryMap } from './common'
import type { Problem } from './types'
import { languages } from './types'
import { queryQuestionByTitleSlug } from '@/api'
import { problemsFolder } from '~/config'

program.name('leet').version(pkg.version)

export function promptLanguage() {
  return inquirer.prompt([{
    type: 'list',
    name: 'language',
    message: '使用语言: ',
    choices: languages,
    default: 'ts',
  }])
}

program.command('open [titleSlug]')
  .description('在浏览器中打开题目链接')
  .action(async (titleSlug) => {
    if (!titleSlug) {
      const answers = await inquirer.prompt({
        type: 'input',
        name: 'titleSlug',
        message: '请输入 titleSlug: ',
        default: 'two-sum',
      })
      titleSlug = answers.titleSlug
    }
    const open = (await import('open')).default
    open(`https://leetcode-cn.com/problems/${titleSlug}/`)
  })

program.command('question').action(async () => {
  const answers = await inquirer.prompt([{
    type: 'input',
    name: 'titleSlug',
    message: '请输入 titleSlug: ',
    default: 'two-sum',
  }])
  const { titleSlug } = answers
  const { question } = await queryQuestionByTitleSlug(titleSlug)
  // eslint-disable-next-line no-console
  console.log(question)

  const problemFolder = path.resolve(problemsFolder, titleSlug)
  const problemInfo: Problem = {
    ...question,
    id: question.questionFrontendId,
    index: question.titleSlug,
    category: 'leetcode',
  }
  // eslint-disable-next-line no-console
  console.log(problemInfo)
  fs.writeFileSync(
    `${problemFolder}/package.json`,
    `${JSON.stringify(problemInfo, null, 2)}\n`,
  )
  consola.success('Update ' + `${problemFolder}/package.json`)
})

// 开始问题
program.command('start').action(async () => {
  const category = await promptCategory()
  if (category === 'leetcode') {
    const answers = await inquirer.prompt([{
      type: 'input',
      name: 'titleSlug',
      message: '请输入 titleSlug: ',
      default: 'two-sum',
    }])
    const { titleSlug } = answers

    if (findProblemByIndex(titleSlug)) {
      logger.warning(`当前题目 ${chalk.yellow(titleSlug)} 已存在。`)
      return
    }

    const { question } = await queryQuestionByTitleSlug(titleSlug)

    const { language } = await promptLanguage()
    writeProblemInfo({
      ...question,
      id: question.questionFrontendId,
      index: question.titleSlug,
      category: 'leetcode',
      language,
    })
    return
  }

  const id = await promptID(category)

  if (findProblemByID(id, category)) {
    logger.warning('当前题号已存在。')
    return
  }

  // 额外信息
  const extraInfo: {
    id: number
    category?: string
  } = {
    id,
  }

  if (categoryMap[category].id.type === 'number')
    extraInfo.id = Number.parseInt(id)

  if (category !== 'leetcode')
    extraInfo.category = category

  const questions = [
    {
      type: 'input',
      name: 'title',
      message: '请输入题目标题: ',
    },
    {
      type: 'input',
      name: 'index',
      message: '请输入题目索引: ',
    },
    {
      type: 'list',
      name: 'difficulty',
      message: '请输入题目难易度: ',
      choices: ['easy', 'medium', 'hard'],
    },
  ]
  const answers = await inquirer.prompt(questions)
  answers.language = await promptLanguage()
  writeProblemInfo(Object.assign(extraInfo, answers))
})

// 解决问题
program
  .command('solve')
  .option('-i, --id <id>', '题目 ID')
  .action(async (cmd) => {
    let problemId = cmd.id

    const category = await promptCategory()

    if (!cmd.id)
      problemId = await promptID(category)

    // 提交
    const curProblem = findProblemByID(problemId, category)
    if (curProblem)
      await pushSolvedProblem(curProblem)
    else
      logger.error('当前题号不存在！请先通过 `leet start` 新建。')
  })

// 生成目录
program.command('generate').action(() => {
  generateToc()
})

program.parse(process.argv)
