/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(a => a**2).sort((a, b) => a - b)
}