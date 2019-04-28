/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let xy = 0
  let yz = 0
  let zx = 0
  for (let i = 0; i < grid.length; i++) {
    let maxCol = 0
    zx += Math.max(...grid[i])
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0) xy += 1
      maxCol = Math.max(maxCol, grid[j][i])
    }
    yz += maxCol
  }
  return xy + yz + zx
}