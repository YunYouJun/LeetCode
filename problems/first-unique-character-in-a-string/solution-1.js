/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const l = s.length
  if (l === 1) {
    return 0
  }
  const dic = {}
  for (let i = 0; i < l; i++) {
    const char = s[i]
    if (dic[char]) {
      dic[char] += 1
    } else {
      dic[char] = 1
    }
  }
  for (let i = 0; i < l; i++) {
    if (dic[s[i]] === 1) {
      return i
    }
  }
  return -1
}
