/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = []
  for (let i = 0; i < numRows; i++) {
    triangle[i] = []
    triangle[i][0] = 1
    triangle[i][i] = 1
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
    }
  }
  return triangle
}