import fs from 'node:fs'
import { getAllProblems, generateProblemMd, readLanguageByExt } from './toc'
import { logger } from './logger'
const distFolder = './dist'

/**
 * 生成目录
 */
export function generateToc() {
  // Get yaml info
  let problems = getAllProblems()
  let toc_md = `# Problems (${problems.length})

|#|Title|Solution|Difficulty|Language|
|-|-----|--------|----------|--------|
`

  for (let i = 0; i < problems.length; i++) {
    let problem = problems[i]
    problem.language = readLanguageByExt(problem)
    let problem_md = generateProblemMd(problem)
    toc_md += problem_md
  }

  if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder)
  }

  fs.writeFileSync(`${distFolder}/README.md`, toc_md)
  logger.info('生成 LeetCode 目录~')
}
