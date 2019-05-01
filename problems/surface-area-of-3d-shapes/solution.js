/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let N = grid.length
  let ans = 0
  let dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j]) {
        ans += 2
        for (let k = 0; k < dir.length; k++) {
          let nr = i + dir[k][0]
          let nc = j + dir[k][1]
          let nv = 0
          if (nr < N && nr >= 0 && nc >=0 && nc < N) {
            nv = grid[nr][nc]
          }
          ans += Math.max(grid[i][j] - nv, 0)
        }
      }
    }
  }
  return ans
}