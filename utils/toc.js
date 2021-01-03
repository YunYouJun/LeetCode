const path = require('path')
const fs = require('fs')

const leetcode_url = 'https://leetcode-cn.com/problems/'
const github_url = 'https://github.com/YunYouJun/LeetCode/tree/master/'

/**
 * 获取当前已完成的所有题目信息
 */
function getAllProblems() {
  const rootFolder = process.cwd()
  const problemsPath = './problems'

  let problemsFolder = fs.readdirSync(problemsPath)

  const problems = []

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
function readLanguageByExt(problem) {
  let extname = new Set()
  let problem_path = 'problems/' + problem.index
  let files = fs.readdirSync(problem_path)
  for (const file of files) {
    extname.add(path.extname(file).slice(1))
  }
  return [...extname].join('/')
}

/**
 * return problem info by id
 *
 * @param {*} id
 * @returns
 */
function getProblemById(id, problems) {
  return problems.find((problem) => {
    return problem.id === parseInt(id)
  })
}

/**
 *  return md by problem info
 * @param {*} problem
 */
function generateProblemMd(problem) {
  return `|${problem.id}|[${problem.title}](${leetcode_url + problem.index})|[${
    problem.index
  }](${github_url + 'problems/' + problem.index})|${problem.difficulty}|${
    problem.language
  }|\n`
}

module.exports = {
  getAllProblems,
  generateProblemMd,
  readLanguageByExt,
  getProblemById,
}
