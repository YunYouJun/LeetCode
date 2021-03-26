import math


class Solution:
    def cuttingRope(self, n: int) -> int:
        if n <= 3:
            return n - 1

        a, b = n // 3, n % 3
        if b == 0:
            return int(math.pow(3, a))
        if b == 1:
            return int(math.pow(3, a - 1) * 4)
        return int(math.pow(3, a) * 2)
        m = math.floor(math.sqrt(n))


if __name__ == '__main__':
    test_cases = [10, 120]
    for case in test_cases:
        ans = Solution().cuttingRope(case)
        print(ans)
