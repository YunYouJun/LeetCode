/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const R = grid.length
  const C = grid[0].length
  const queue = []
  const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ]
  for (let i = 0; i < R; i++) {
    const row = grid[i]
    for (let j = 0; j < C; j++) {
      const val = row[j]
      if (val === 2)
        queue.push([i, j, 0])
    }
  }
  let d = 0
  while (queue.length > 0) {
    const orange = queue.shift()
    for (const dir of dirs) {
      const nr = orange[0] + dir[0]
      const nc = orange[1] + dir[1]
      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
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
      if (val === 1)
        return -1
    }
  }
  return d
}
