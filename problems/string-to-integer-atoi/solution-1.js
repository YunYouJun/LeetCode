/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let num = parseInt(str.trim().match(/^[+-]?\d+/g))
  if (isNaN(num)) return 0
  else return Math.max(Math.min(num, 2**31 - 1), -(2**31))
}