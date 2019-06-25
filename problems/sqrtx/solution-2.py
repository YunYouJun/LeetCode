class Solution:
    def mySqrt(self, x: int) -> int:
        l = 0
        # x = 1 特例
        r = x // 2 + 1
        while l < r:
            mid = l + (r - l + 1) // 2
            square = mid * mid
            if square > x:
                r = mid - 1
            else:
                l = mid
        return l