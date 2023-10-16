function dfs(grid: number[][], i: number, j: number): number {
  let size = 0
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length)
    return 0

  if (grid[i][j] === 0)
    return 0

  size += 1
  grid[i][j] = 0

  return (
    size
    + dfs(grid, i - 1, j)
    + dfs(grid, i + 1, j)
    + dfs(grid, i, j - 1)
    + dfs(grid, i, j + 1)
  )
}

export function maxAreaOfIsland(grid: number[][]): number {
  let max = 0
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]
    for (let j = 0; j < row.length; j++) {
      const item = row[j]

      if (item === 1)
        max = Math.max(max, dfs(grid, i, j))
    }
  }
  return max
}
