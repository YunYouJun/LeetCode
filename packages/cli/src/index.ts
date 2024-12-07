import type { Problem } from './types'
import path from 'node:path'
import process from 'node:process'
import { queryQuestionByTitleSlug } from '@/api'

import { input, select } from '@inquirer/prompts'
import chalk from 'chalk'
import { program } from 'commander'
import consola from 'consola'
import fs from 'fs-extra'
import inquirer from 'inquirer'

import { camelCase } from 'scule'

import { customFolder, problemsFolder } from '~/config'

import pkg from '../package.json'
import { generateToc } from './generateTOC'
import { logger } from './logger'
import { languages } from './types'
import {
  findProblemByID,
  findProblemByIndex,
  promptCategory,
  promptID,
  pushSolvedProblem,
  writeProblemInfo,
} from './utils'

program.name('leet').version(pkg.version)

export async function promptLanguage(): Promise<string> {
  return await select({
    message: '使用语言: ',
    choices: languages,
    default: 'ts',
  })
}

program.command('custom [titleSlug]')
  .description('新建自定义模板')
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
    const problemFolder = path.resolve(customFolder, titleSlug)
    if (fs.existsSync(problemFolder)) {
      consola.warn(`当前题目 ${chalk.yellow(titleSlug)} 已存在。`)
      return
    }

    fs.ensureDirSync(problemFolder)
    fs.writeJSONSync(`${problemFolder}/package.json`, {
      name: titleSlug,
      title: titleSlug,
      difficulty: '',
    }, { spaces: 2 })
    const testTemplate = fs.readFileSync(`${customFolder}/example/index.test.ts`, 'utf-8')
    const indexTemplate = fs.readFileSync(`${customFolder}/example/index.ts`, 'utf-8')
    const camelCaseTitle = camelCase(titleSlug)
    fs.writeFileSync(`${problemFolder}/index.test.ts`, testTemplate.replace(/__example__/g, camelCaseTitle))
    fs.writeFileSync(`${problemFolder}/index.ts`, indexTemplate.replace(/__example__/g, camelCaseTitle))
  })

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

  console.log(question)

  const problemFolder = path.resolve(problemsFolder, titleSlug)
  const problemInfo: Problem = {
    ...question,
    id: question.questionFrontendId,
    index: question.titleSlug,
    category: 'leetcode',
  }

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
    const language = await promptLanguage()

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

  if (findProblemByID(id?.toString() || '', category)) {
    logger.warning('当前题号已存在。')
    return
  }

  // 额外信息
  const extraInfo: {
    id: number | string
    category?: string
  } = {
    id: id!,
  }

  if (category !== 'leetcode')
    extraInfo.category = category

  const title = await input({
    message: '请输入题目标题: ',
  })
  const index = await input({
    message: '请输入题目索引: ',
  })
  const difficulty = await select<string>({
    message: '请输入题目难易度: ',
    choices: ['easy', 'medium', 'hard'],
  })
  const language = await promptLanguage()
  writeProblemInfo({
    ...extraInfo,
    title,
    index,
    difficulty,
    language,
  })
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
