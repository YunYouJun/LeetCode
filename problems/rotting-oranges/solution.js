/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let R = grid.length
  let C = grid[0].length
  let queue = []
  let dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1]
  ]
  for (let i = 0; i < R; i++) {
    const row = grid[i]
    for (let j = 0; j < C; j++) {
      const val = row[j]
      if (val === 2) {
        queue.push([i, j, 0])
      }
    }
  }
  let d = 0
  while (queue.length > 0) {
    let orange = queue.shift()
    for (const dir of dirs) {
      let nr = orange[0] + dir[0]
      let nc = orange[1] + dir[1]
      if (nr >=0 && nr < R && nc >=0 && nc < C) {
        if (grid[nr][nc] === 1) {
          grid[nr][nc] = 2
          d = orange[2] + 1
          queue.push([nr, nc, d])
        }
      }
    }
  }
  for (const row of grid) {
    for (const val of row) {
      if (val === 1) {
        return -1
      }
    }
  }
  return d
}