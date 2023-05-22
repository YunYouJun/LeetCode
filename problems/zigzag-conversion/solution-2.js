/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1)
    return s
  let ans = ''
  const cycleLen = 2 * numRows - 2
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += cycleLen) {
      ans += s[j + i]
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < s.length)
        ans += s[j + cycleLen - i]
    }
  }
  return ans
}
