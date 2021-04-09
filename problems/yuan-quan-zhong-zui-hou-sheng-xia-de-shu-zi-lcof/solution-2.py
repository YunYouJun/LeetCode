class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        f = 0
        for i in range(2, n + 1):
            f = (m + f) % i
        return f


if __name__ == '__main__':
    test_cases = [[5, 3], [10, 17]]
    for case in test_cases:
        ans = Solution().lastRemaining(*case)
        print(ans)
