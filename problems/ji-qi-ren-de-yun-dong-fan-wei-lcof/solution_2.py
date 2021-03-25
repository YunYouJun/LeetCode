class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        def sumOfNum(number: int):
            total = 0
            while number > 0:
                total += number % 10
                number //= 10
            return total

        visited = set([(0, 0)])
        for i in range(m):
            for j in range(n):
                if ((i - 1, j) in visited or (i, j - 1) in visited) and sumOfNum(i) + sumOfNum(j) <= k:
                    visited.add((i, j))
        return len(visited)


if __name__ == '__main__':
    test_cases = [[2, 3, 1], [3, 1, 0]]
    for case in test_cases:
        ans = Solution().movingCount(*case)
        print(ans)
