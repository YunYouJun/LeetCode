import fs from 'node:fs'
import { logger } from './logger'
import { generateProblemMd, getAllProblems, readLanguageByExt } from './toc'

const distFolder = './dist'

/**
 * 生成目录
 */
export function generateToc() {
  // Get yaml info
  const problems = getAllProblems()
  let toc_md = `# Problems (${problems.length})

|#|Title|Solution|Difficulty|Language|
|-|-----|--------|----------|--------|
`

  for (let i = 0; i < problems.length; i++) {
    const problem = problems[i]
    problem.language = readLanguageByExt(problem)
    const problem_md = generateProblemMd(problem)
    toc_md += problem_md
  }

  if (!fs.existsSync(distFolder))
    fs.mkdirSync(distFolder)

  fs.writeFileSync(`${distFolder}/README.md`, toc_md)
  logger.info('生成 LeetCode 目录~')
}
