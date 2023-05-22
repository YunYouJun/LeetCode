/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = function (str) {
  let ans = ''
  for (const s of str)
    ans += String.fromCharCode(s.charCodeAt() | 32)

  return ans
}
