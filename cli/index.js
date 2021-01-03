#!/usr/bin/env node
const { program } = require('commander')
const inquirer = require('inquirer')
const shell = require('shelljs')
const fs = require('fs')

const pkg = require('../package.json')
const { getAllProblems } = require('../utils/toc')
program.name('leet').version(pkg.version)

const problemsFolder = './problems'

// 开始问题
program.command('start').action(async () => {
  const questions = [
    {
      type: 'input',
      name: 'id',
      message: '请输入题目 ID:',
      validate: (val) => {
        if (Number.isInteger(parseInt(val))) {
          return true
        } else {
          return '题目 ID 应当是一个整数'
        }
      },
    },
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

  const problemFolder = `${problemsFolder}/${answers.index}`
  fs.mkdirSync(problemFolder)
  fs.writeFileSync(
    `${problemFolder}/package.json`,
    JSON.stringify(answers, null, 2)
  )
})

// 解决问题
program
  .command('solve')
  .option('-i, --id <id>', '题目 ID')
  .action(async (cmd) => {
    let problemId = cmd.id

    if (!cmd.id) {
      const questions = [
        {
          type: 'input',
          name: 'id',
          message: '请输入题目 ID:',
          validate: (val) => {
            if (Number.isInteger(parseInt(val))) {
              return true
            } else {
              return '题目 ID 应当是一个整数'
            }
          },
        },
      ]

      const answers = await inquirer.prompt(questions)
      problemId = answers.id
    }

    const problems = getAllProblems()
    const curProblem = problems.find((problem) => {
      return problem.id === parseInt(problemId)
    })

    // 提交
    pushSolvedProblem(curProblem)
  })

/**
 * 提交到 Git
 * @param {*} problem
 */
function pushSolvedProblem(problem) {
  shell.exec('git add -A')
  shell.exec(`git commit -m "✅ solve ${problem.index}"`)
  shell.exec('git push')
}

program.parse(process.argv)
