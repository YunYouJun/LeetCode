/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export const convert = function (s, numRows) {
  if (numRows === 1)
    return s
  const rows = Array.from({ length: numRows }).fill('')
  let curRow = 0
  let goingDown = false
  const ans = ''
  for (const c of s) {
    rows[curRow] += c
    if (curRow === 0 || curRow === numRows - 1)
      goingDown = !goingDown

    curRow += goingDown ? 1 : -1
  }
  return rows.join('')
}
