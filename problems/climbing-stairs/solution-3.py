class Solution:
    def climbStairs(self, n: int) -> int:
        first, second = 1, 1
        while n-1:
            first, second = second, first + second
            n -= 1
        return second