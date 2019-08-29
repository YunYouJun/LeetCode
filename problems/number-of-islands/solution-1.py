# DFS
class Solution:
    dis = [(-1, 0), (0, -1), (1,0), (0,1)]
    def numIslands(self, grid: [[str]]) -> int:
        
        def dfs(grid, r, c):
            grid[r][c] = '0'
            for di in self.dis:
                new_r = r + di[0]
                new_c = c + di[1]
                if 0 <= new_r < m and 0 <= new_c <n and grid[new_r][new_c] == '1':
                    dfs(grid, new_r, new_c)

        m = len(grid)
        if m == 0:
            return 0
        n = len(grid[0])
        count = 0
        for r in range(m):
            for c in range(n):
                if grid[r][c] == '1':
                    count += 1
                    dfs(grid, r, c)
        return count