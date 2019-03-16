/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let s = x.toString().split('');
  return s.join('') === s.reverse().join('');
};