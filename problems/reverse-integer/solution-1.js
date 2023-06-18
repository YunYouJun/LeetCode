/**
 * js Number.MAX_SAFE_INTEGER [-(2^53 - 1) ~ 2^53 - 1]
 * different from
 * C MAX_INTEGER [−2^31, 2^31 − 1]
 * @param {number} x
 * @return {number}
 */
function reverseNumber(x) {
  const s = x.toString()
  return Number.parseInt(s.split('').reverse().join(''))
}

const reverse = function (x) {
  if (x < -2147483648 || x > 2147483647)
    return 0

  let r = 0
  if (x < 0) {
    r = -reverseNumber(-x)
    if (r < -2147483648)
      r = 0
  }
  else {
    r = reverseNumber(x)
    if (r > 2147483647)
      r = 0
  }
  return r
}
