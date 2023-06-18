/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  const num = Number.parseInt(str.trim().match(/^[+-]?\d+/g))
  if (Number.isNaN(num))
    return 0
  else return Math.max(Math.min(num, 2 ** 31 - 1), -(2 ** 31))
}
