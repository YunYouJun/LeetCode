/**
 * @param {number[][]} grid
 * @return {number}
 */
export const surfaceArea = function (grid) {
  let area = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j])
        area += grid[i][j] * 4 + 2
      if (i)
        area -= Math.min(grid[i][j], grid[i - 1][j]) * 2
      if (j)
        area -= Math.min(grid[i][j], grid[i][j - 1]) * 2
    }
  }
  return area
}
