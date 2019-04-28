class Solution:
    def projectionArea(self, grid: [[int]]) -> int:
        ans = 0
        for i in range(len(grid)):
            best_row = max(grid[i])
            best_col = 0
            for j in range(len(grid[i])):
                if grid[i][j] > 0: ans += 1
                best_col = max(best_col, grid[j][i])
            ans += best_row + best_col
        return ans