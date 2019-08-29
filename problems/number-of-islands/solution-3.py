from typing import List
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:

        class UnionFind:

            def __init__(self, n):
                self.count = n
                self.parent = [i for i in range(n)]
                self.rank = [1] * n

            def get_count(self):
                return self.count
            
            def find(self, p):
                while p != self.parent[p]:
                    self.parent[p] = self.parent[self.parent[p]]
                    p = self.parent[p]
                return p
            
            def is_connected(self, p, q):
                return self.find(p) == self.find(q)

            def union(self, p, q):
                p_root = self.find(p)
                q_root = self.find(q)
                if p_root == q_root:
                    return

                if self.rank[p_root] > self.rank[q_root]:
                    self.parent[q_root] = p_root
                elif self.rank[p_root] < self.rank[q_root]:
                    self.parent[p_root] = q_root
                else:
                    self.parent[q_root] = p_root
                    self.rank[p_root] += 1

                self.count -= 1

        m = len(grid)
        if m == 0:
            return 0
        n = len(grid[0])

        def get_index(x,y):
            return x * n + y

        directions = [(1,0), (0,1)]
        dummy_node = m * n

        uf = UnionFind(dummy_node + 1)
        for r in range(m):
            for c in range(n):
                if grid[r][c] == '0':
                    uf.union(get_index(r, c), dummy_node)
                if grid[r][c] == '1':
                    for direction in directions:
                        new_r = r + direction[0]
                        new_c = c + direction[1]
                        if new_r < m and new_c < n and grid[new_r][new_c] == '1':
                            uf.union(get_index(r, c), get_index(new_r, new_c))
        
        return uf.get_count() - 1