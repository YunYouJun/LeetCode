class Solution:
    def transpose(self, A: [[int]]) -> [[int]]:
        row, col = len(A), len(A[0])
        ans = [[None] * row for _ in range(col)]
        for i, r in enumerate(A):
            for j, val in enumerate(r):
                ans[j][i] = val
        return ans