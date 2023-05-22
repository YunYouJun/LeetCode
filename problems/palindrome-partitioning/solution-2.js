/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const res = []
  function dfs(s, path) {
    if (!s.length) {
      res.push(path)
      return
    }
    for (let i = 1; i <= s.length; i++) {
      const split_s = s.slice(0, i)
      if (split_s === split_s.split('').reverse().join(''))
        dfs(s.slice(i), path.concat(split_s))
    }
  }
  dfs(s, [])
  return res
}
