const fs = require('fs')
const {
  getAllProblems,
  generateProblemMd,
  readLanguageByExt,
} = require('../utils/toc')

const distFolder = './dist'

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

fs.writeFileSync(`${distFolder}/TOC.md`, toc_md)
console.info('生成 LeetCode 目录~')
