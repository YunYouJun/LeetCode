/**
 * BFS
 * @param grid
 */
export function numIslands(grid: string[][]): number {
  const nr = grid.length
  if (nr === 0)
    return 0
  const nc = grid[0].length

  let num_islands = 0

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === '1') {
        num_islands++
        grid[r][c] = '0'

        const neighbors: { r: number, c: number }[] = []
        neighbors.push({
          r,
          c,
        })

        while (neighbors.length) {
          const { r, c } = neighbors.shift()!
          if (r - 1 >= 0 && grid[r - 1][c] === '1') {
            neighbors.push({
              r: r - 1,
              c,
            })
            grid[r - 1][c] = '0'
          }
          if (r + 1 < nr && grid[r + 1][c] === '1') {
            neighbors.push({
              r: r + 1,
              c,
            })
            grid[r + 1][c] = '0'
          }
          if (c - 1 >= 0 && grid[r][c - 1] === '1') {
            neighbors.push({
              r,
              c: c - 1,
            })
            grid[r][c - 1] = '0'
          }
          if (c + 1 < nc && grid[r][c + 1] === '1') {
            neighbors.push({
              r,
              c: c + 1,
            })
            grid[r][c + 1] = '0'
          }
        }
      }
    }
  }

  return num_islands
}
