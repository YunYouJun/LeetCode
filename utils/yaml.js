const yaml = require('js-yaml')
const fs = require('fs')

/**
 * 读取 yaml 文件
 * @param {string} path 路径
 */
function loadYaml(path) {
  let data
  try {
    data = yaml.load(fs.readFileSync(path, 'utf8'))
  } catch (e) {
    console.log(e)
  }
  return data
}

module.exports = {
  loadYaml,
}
