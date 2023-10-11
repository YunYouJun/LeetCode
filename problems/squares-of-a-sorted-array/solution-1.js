/**
 * @param {number[]} A
 * @return {number[]}
 */
export const sortedSquares = function (A) {
  return A.map(a => a ** 2).sort((a, b) => a - b)
}
