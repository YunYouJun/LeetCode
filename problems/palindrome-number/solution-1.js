/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const s = x.toString().split('')
  return s.join('') === s.reverse().join('')
}
