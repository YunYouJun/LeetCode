class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        def f(n, m):
            if n == 0:
                return 0
            x = f(n - 1, m)
            return (m + x) % n

        return f(n, m)


if __name__ == '__main__':
    test_cases = [[5, 3], [10, 17]]
    for case in test_cases:
        ans = Solution().lastRemaining(*case)
        print(ans)
