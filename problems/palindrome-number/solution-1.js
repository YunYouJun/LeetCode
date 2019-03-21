/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = x.toString().split('')
  return s.join('') === s.reverse().join('')
}
