class Solution:
    def projectionArea(self, grid: [[int]]) -> int:
        ans = sum(map(max, grid))
        ans += sum(map(max, zip(*grid)))
        ans += sum(v > 0 for row in grid for v in row)
        return ans