/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let revertedNum = 0
  while (x > revertedNum) {
    revertedNum = revertedNum * 10 + x % 10
    x = parseInt(x / 10)
  }
  return revertedNum === x || parseInt(revertedNum / 10) === x
}
