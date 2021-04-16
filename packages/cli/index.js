#!/usr/bin/env node
const { program } = require("commander");
const inquirer = require("inquirer");

const {
  pushSolvedProblem,
  writeProblemInfo,
  promptCategory,
  promptID,
  findProblemByID,
} = require("./utils");

const logger = require("./logger");

const pkg = require("./package.json");
const { generateToc } = require("./generateTOC");

program.name("leet").version(pkg.version);

// 开始问题
program.command("start").action(async () => {
  const category = await promptCategory();
  const id = await promptID(category);

  if (findProblemByID(id, category)) {
    logger.warning("当前题号已存在。");
    return;
  }

  // 额外信息
  let extraInfo;
  if (category === "leetcode") {
    extraInfo = {
      id: parseInt(id),
    };
  } else if (category === "lcof") {
    extraInfo = {
      id,
      category,
    };
  } else {
    // lcp and other
    extraInfo = {
      id: parseInt(id),
      category,
    };
  }

  const questions = [
    {
      type: "input",
      name: "title",
      message: "请输入题目标题: ",
    },
    {
      type: "input",
      name: "index",
      message: "请输入题目索引: ",
    },
    {
      type: "list",
      name: "difficulty",
      message: "请输入题目难易度: ",
      choices: ["easy", "medium", "hard"],
    },
    {
      type: "list",
      name: "language",
      message: "使用语言: ",
      choices: ["py", "js", "ts"],
      default: "py",
    },
  ];
  const answers = await inquirer.prompt(questions);
  writeProblemInfo(Object.assign(extraInfo, answers));
});

// 解决问题
program
  .command("solve")
  .option("-i, --id <id>", "题目 ID")
  .action(async (cmd) => {
    let problemId = cmd.id;

    const category = await promptCategory();

    if (!cmd.id) {
      problemId = await promptID(category);
    }

    // 提交
    const curProblem = findProblemByID(problemId, category);
    if (curProblem) {
      pushSolvedProblem(curProblem);
    } else {
      logger.error("当前题号不存在！请先通过 `leet start` 新建。");
    }
  });

// 生成目录
program.command("generate").action(() => {
  generateToc();
});

program.parse(process.argv);
