class Solution:
    def fastPow(self, x, n):
        if n == 0:
            return 1.0
        half = self.fastPow(x, n//2)
        if n % 2 == 0:
            return half * half
        else:
            return half * half * x

    def myPow(self, x: float, n: int) -> float:
        N = n
        if N < 0:
            x = 1/x
            N = -N
        return self.fastPow(x, N)
