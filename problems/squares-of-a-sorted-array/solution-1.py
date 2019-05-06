class Solution:
    def sortedSquares(self, A: [int]) -> [int]:
        return sorted(x*x for x in A)