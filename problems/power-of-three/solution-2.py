class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        p = 1
        while p < n:
            p = p * 3
        return p == n