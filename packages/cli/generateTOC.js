const fs = require("fs");
const {
  getAllProblems,
  generateProblemMd,
  readLanguageByExt,
} = require("./toc");

const distFolder = "./dist";

/**
 * 生成目录
 */
function generateToc() {
  // Get yaml info
  let problems = getAllProblems();
  let toc_md = `# Problems (${problems.length})

|#|Title|Solution|Difficulty|Language|
|-|-----|--------|----------|--------|
`;

  for (let i = 0; i < problems.length; i++) {
    let problem = problems[i];
    problem.language = readLanguageByExt(problem);
    let problem_md = generateProblemMd(problem);
    toc_md += problem_md;
  }

  if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder);
  }

  fs.writeFileSync(`${distFolder}/README.md`, toc_md);
  const logger = require("./logger");
  logger.info("生成 LeetCode 目录~");
}

module.exports = {
  generateToc,
};
