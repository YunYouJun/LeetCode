/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s
  let rows = new Array(numRows).fill('')
  let curRow = 0
  let goingDown = false
  let ans = ''
  for (const c of s) {
    rows[curRow] += c
    if (curRow === 0 || curRow === numRows - 1) {
      goingDown = !goingDown
    }
    curRow += goingDown ? 1 : -1
  }
  return rows.join('')
}