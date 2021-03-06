/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const regex = new RegExp('[^A-Za-z0-9]', 'g')
  const s2 = s.replace(regex, '').toLowerCase()
  const l = s2.length
  for (let i = 0; i < parseInt(l / 2); i++) {
    if (s2[i] !== s2[l - i - 1]) {
      return false
    }
  }
  return true
}
