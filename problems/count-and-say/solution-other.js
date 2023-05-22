/** 根据输入的数字进行数数（原题题目拓展）
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let say = n.toString()
  if (n > 1) {
    for (let i = 1; i < n; i++)
      say = countString(say)
  }
  return say
}

function countString(s) {
  let old = s[0]
  let count = 1
  let say = ''
  let cur
  if (s.length === 1) {
    say = `1${s}`
  }
  else {
    for (let i = 1; i <= s.length; i++) {
      cur = s[i]
      if (cur === old) {
        count += 1
      }
      else {
        say += count.toString() + old
        count = 1
      }
      old = cur
    }
  }
  return say
}
