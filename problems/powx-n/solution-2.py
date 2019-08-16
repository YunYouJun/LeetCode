# 超时
class Solution:
    def myPow(self, x: float, n: int) -> float:
        N = n
        if N < 0:
            x = 1/x
            N = -N
        ans = 1
        for i in range(N):
            ans *= x
        return ans