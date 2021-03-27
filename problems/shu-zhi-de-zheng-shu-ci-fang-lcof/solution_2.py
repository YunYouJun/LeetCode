class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0:
            return 0
        res = 1
        if n < 0:
            x, n = 1 / x, -n
        while n:
            if n & 1:
                res *= x
            x *= x
            n >>= 1
        return res


if __name__ == '__main__':
    test_cases = [[2.0, 10], [2.0, -10]]
    for case in test_cases:
        ans = Solution().myPow(*case)
        print(ans)
