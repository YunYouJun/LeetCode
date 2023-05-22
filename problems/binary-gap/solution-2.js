/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = function (N) {
  let res = 0
  let d = -Infinity
  while (N > 0) {
    if (N & 1) {
      res = Math.max(res, d)
      d = 0
    }
    N = N >>> 1
    d++
  }
  return res
}
