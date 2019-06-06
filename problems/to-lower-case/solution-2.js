/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let ans = ''
  for (const s of str) {
    ans += String.fromCharCode(s.charCodeAt() | 32)
  }
  return ans
}