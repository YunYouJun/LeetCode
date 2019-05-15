const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

// const
const leetcode_url = 'https://leetcode-cn.com/problems/'
const github_url = 'https://github.com/YunYouJun/LeetCode/tree/master/'
const toc_path = './toc.yml'

// Get yaml info
let doc = ''
try {
  doc = yaml.safeLoad(fs.readFileSync(toc_path, 'utf8'))
} catch (e) {
  console.log(e)
}

let problems = doc.problems
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

fs.writeFile('TOC.md', toc_md, (err) => {
  if (err) throw err
  console.log('Generate problems TOC successfully!')
})

// generate card toc
let cards = doc.card
let cards_toc_md = `# Card

|Title|TOC|
|-----|---|
`

for (const card of cards) {
  cards_toc_md += `|[${card.title}](${card.url})|[${card.index}](${github_url + 'card/' + card.index})|\n`
  let card_toc_md = `# [${card.title}](${card.url})\n\n`
  console.log(card.topics)
  for (const topic of card.topics) {
    card_toc_md += `## ${topic.title}\n\n|#|Title|Solution|Difficulty|Language|\n|-|-----|--------|----------|--------|\n`
    topic.set.forEach(id => {
      let problem = getProblemById(id)
      let problem_md = generateProblemMd(problem)
      card_toc_md += problem_md
    })
  }
  fs.writeFile('card/' + card.index + '/README.md', card_toc_md, (err) => {
    if (err) throw err
    console.log(`Generate ${card.index} TOC successfully!`)
  })
}

fs.writeFile('card/README.md', cards_toc_md, (err) => {
  if (err) throw err
  console.log('Generate cards TOC successfully!')
})


// function

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
function getProblemById(id) {
  for (const problem of problems) {
    if (problem.id === id) {
      return problem
    }
  }
}

/**
 *  return md by problem info
 * @param {*} problem 
 */
function generateProblemMd(problem) {
  return `|${problem.id}|[${problem.title}](${leetcode_url + problem.index})|[${problem.index}](${github_url + 'problems/' + problem.index})|${problem.difficulty}|${problem.language}|\n`
}