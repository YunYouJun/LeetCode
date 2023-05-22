/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const dic = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let ans = 0
  for (let i = 0; i < s.length - 1; i++)
    dic[s[i]] < dic[s[i + 1]] ? ans -= dic[s[i]] : ans += dic[s[i]]

  return ans + dic[s[s.length - 1]]
}
