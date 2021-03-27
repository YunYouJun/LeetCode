class Solution:
    def myPow(self, x: float, n: int) -> float:
        return x**n


if __name__ == '__main__':
    test_cases = [[2.0, 10], [2.0, -10]]
    for case in test_cases:
        ans = Solution().myPow(*case)
        print(ans)
