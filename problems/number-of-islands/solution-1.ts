/**
 * DFS
 * @param grid
 * @returns
 */
function dfs(grid: string[][], r: number, c: number) {
  const nr = grid.length
  const nc = grid[0].length

  grid[r][c] = '0'

  if (r - 1 >= 0 && grid[r - 1][c] === '1')
    dfs(grid, r - 1, c)
  if (r + 1 < nr && grid[r + 1][c] === '1')
    dfs(grid, r + 1, c)
  if (c - 1 >= 0 && grid[r][c - 1] === '1')
    dfs(grid, r, c - 1)
  if (c + 1 < nc && grid[r][c + 1] === '1')
    dfs(grid, r, c + 1)
}

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
        dfs(grid, r, c)
      }
    }
  }

  return num_islands
}
