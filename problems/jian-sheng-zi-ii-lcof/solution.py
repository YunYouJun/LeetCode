import math


class Solution:
    def cuttingRope(self, n: int) -> int:
        if n <= 3:
            return n - 1

        a, b = n // 3 - 1, n % 3
        p = 1000000007
        x = 3
        rem = 1
        while a > 0:
            if a % 2:
                rem = (rem * x) % p
            x = x ** 2 % p
            a //= 2
        if b == 0:
            return rem * 3 % p
        if b == 1:
            return rem * 4 % p
        return rem * 6 % p


if __name__ == '__main__':
    test_cases = [2, 10, 120]
    for case in test_cases:
        ans = Solution().cuttingRope(case)
        print(ans)
