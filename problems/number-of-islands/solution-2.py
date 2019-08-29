# BFS
from typing import List
from collections import deque
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        dis = [(-1, 0), (0, -1), (1,0), (0,1)]
        m = len(grid)
        if m == 0:
            return 0
        n = len(grid[0])
        count = 0
        for r in range(m):
            for c in range(n):
                if grid[r][c] == '1':
                    count += 1
                    grid[r][c] = '0'
                    queue = deque()
                    queue.append((r, c))
                    while queue:
                        cur_r, cur_c = queue.popleft()
                        for di in dis:
                            new_r = cur_r + di[0]
                            new_c = cur_c + di[1]
                            if 0 <= new_r < m and 0 <= new_c < n and grid[new_r][new_c] == '1':
                                queue.append((new_r, new_c))
                                grid[new_r][new_c] = '0'
        return count