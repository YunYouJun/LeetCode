/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits.length === 1) {
    if (digits[0] === 9) {
      digits[0] = 0
      digits.unshift(1)
    } else {
      digits[0] += 1
    }
  } else {
    const end = digits.length - 1
    if (digits[end] === 9) {
      digits = plusOne(digits.slice(0, -1))
      digits.push(0)
    } else {
      digits[end] += 1
    }
  }
  return digits
}
