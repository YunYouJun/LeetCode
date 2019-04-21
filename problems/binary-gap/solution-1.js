/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  let bin = N.toString(2)
  let max = 0
  let count = 0
  let flag = false
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      if (flag) count += 1
      max = count > max ? count : max
      count = 0
      flag = true
    } else {
      if (flag) count += 1
    }
  }
  return max
}