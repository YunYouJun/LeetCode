class UnionFind {
  count = 0
  parent: number[] = []
  rank: number[] = []

  constructor(grid: string[][]) {
    const nr = grid.length
    const nc = grid[0].length

    for (let r = 0; r < nr; r++) {
      for (let c = 0; c < nc; c++) {
        if (grid[r][c] === '1') {
          this.parent.push(r * nc + c)
          this.count++
        }
        else {
          this.parent.push(-1)
        }
        this.rank.push(0)
      }
    }
  }

  find(i: number): number {
    if (this.parent[i] !== i)
      this.parent[i] = this.find(this.parent[i])

    return this.parent[i]
  }

  unite(x: number, y: number) {
    const rootx = this.find(x)
    const rooty = this.find(y)

    if (rootx !== rooty) {
      if (this.rank[rootx] > this.rank[rooty]) {
        this.parent[rooty] = rootx
      }
      else if (this.rank[rootx] < this.rank[rooty]) {
        this.parent[rootx] = rooty
      }
      else {
        this.parent[rooty] = rootx
        this.rank[rootx] += 1
      }

      this.count--
    }
  }

  getCount() {
    return this.count
  }
}

/**
 * UNION FIND
 * @param grid
 */
export function numIslands(grid: string[][]): number {
  const nr = grid.length
  if (nr === 0)
    return 0
  const nc = grid[0].length

  const uf = new UnionFind(grid)

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === '1') {
        grid[r][c] = '0'

        if (r - 1 >= 0 && grid[r - 1][c] === '1')
          uf.unite(r * nc + c, (r - 1) * nc + c)
        if (r + 1 < nr && grid[r + 1][c] === '1')
          uf.unite(r * nc + c, (r + 1) * nc + c)
        if (c - 1 >= 0 && grid[r][c - 1] === '1')
          uf.unite(r * nc + c, r * nc + c - 1)
        if (c + 1 < nc && grid[r][c + 1] === '1')
          uf.unite(r * nc + c, r * nc + c + 1)
      }
    }
  }

  return uf.getCount()
}
