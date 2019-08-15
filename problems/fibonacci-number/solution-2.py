class Solution:
    def fib(self, N: int) -> int:
        cache = {}
        def recur_fib(N):
            if N in cache: return cache[N]
            if N < 2:
                ans = N
            else:
                ans = recur_fib(N-1) + recur_fib(N-2)
            cache[N] = ans
            return ans
        return recur_fib(N)