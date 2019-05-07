const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

// const
const leetcode_url = 'https://leetcode-cn.com/problems/'
const github_url = 'https://github.com/YunYouJun/LeetCode/tree/master/problems/'
const toc_path = './toc.yml'

// Get yaml info
let doc = ''
try {
  doc = yaml.safeLoad(fs.readFileSync(toc_path, 'utf8'))
} catch (e) {
  console.log(e)
}

let toc_md = `# TOC

|#|Title|Solution|Difficulty|Language|
|-|-----|--------|----------|--------|
`

let solved = doc.solved
for (let i = 0; i < solved.length; i++) {
  const problem = solved[i]
  
  // read language by ext
  let extname = new Set()
  let problem_path = 'problems/' + problem.index
  let files = fs.readdirSync(problem_path)
  for (const file of files) {
    extname.add(path.extname(file).slice(1))
  }
  problem.language = [...extname].join('/')

  const problem_md = `|${problem.id}|[${problem.title}](${leetcode_url + problem.index})|[${problem.index}](${github_url + problem.index})|${problem.difficulty}|${problem.language}|\n`
  toc_md += problem_md
}

fs.writeFile('TOC.md', toc_md, (err) => {
  if (err) throw err
  console.log('Generate TOC successfully!')
})
