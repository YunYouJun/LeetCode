const fs = require("fs");
const shell = require("shelljs");
const inquirer = require("inquirer");

const { getAllProblems } = require("./toc");
const logger = require("./logger");
const problemsFolder = "./problems";
// all problems info
const problems = getAllProblems();

const { categoryMap } = require("./common");
const choices = Object.keys(categoryMap).map((key) => {
  return {
    name: categoryMap[key],
    value: key,
  };
});

/**
 * 提交到 Git
 * @param {*} problem
 */
function pushSolvedProblem(problem) {
  shell.exec("git add -A");
  shell.exec(`git commit -m "✅ solve ${problem.index}"`);
  shell.exec("git push");
}

/**
 * 写入题目信息 package.json
 * @param {*} info 题目信息
 */
function writeProblemInfo(info) {
  const problemFolder = `${problemsFolder}/${info.index}`;
  if (!fs.existsSync(problemFolder)) {
    fs.mkdirSync(problemFolder);
  }
  fs.writeFileSync(
    `${problemFolder}/package.json`,
    JSON.stringify(info, null, 2)
  );

  const templateText = getTemplateByLanguage(info.language);
  fs.writeFileSync(`${problemFolder}/solution.${info.language}`, templateText);
}

/**
 * 获取语言对应模板
 * @param {string} language
 */
function getTemplateByLanguage(language) {
  const template = `templates/solution.${language}`;
  if (fs.existsSync(template)) {
    return fs.readFileSync(template, "utf-8");
  } else {
    logger.error(`检查模版文件夹或对应语言模版 ${template} 是否存在！`);
  }
}

/**
 * prompt for category
 * @returns
 */
async function promptCategory() {
  const questions = [
    {
      type: "list",
      name: "category",
      message: "题目类型",
      choices,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers.category;
}

async function promptID(category = "leetcode") {
  const questions = [
    {
      type: "input",
      name: "id",
      message: "请输入题目 ID（序号）:",
    },
  ];

  if (category === "leetcode") {
    questions[0].validate = (val) => {
      if (Number.isInteger(parseInt(val))) {
        return true;
      } else {
        return "题目 ID 应当是一个整数";
      }
    };
  }

  const answers = await inquirer.prompt(questions);
  return answers.id;
}

function findProblemByID(id, category = "leetcode") {
  return problems.find((problem) => {
    if (category === "lcof") {
      return problem.category === category && problem.id === id;
    } else if (category === "leetcode") {
      return problem.id === parseInt(id);
    }
  });
}

module.exports = {
  pushSolvedProblem,
  writeProblemInfo,
  promptCategory,
  promptID,
  findProblemByID,
};
