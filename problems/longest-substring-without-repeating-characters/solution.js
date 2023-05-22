/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let ans = 0
  const dic = new Map()
  for (let i = 0, j = 0; j < s.length; j++) {
    if (dic.has(s[j]))
      i = Math.max(dic.get(s[j]), i)

    ans = Math.max(ans, j - i + 1)
    dic.set(s[j], j + 1)
  }
  return ans
}
