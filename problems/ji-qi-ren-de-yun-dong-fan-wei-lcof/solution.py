class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        def sumOfNum(number: int):
            total = 0
            while number > 0:
                total += number % 10
                number //= 10
            return total

        from queue import Queue
        q = Queue()
        q.put((0, 0))
        s = set()
        while not q.empty():
            x, y = q.get()
            if (x, y) not in s and 0 <= x < m and 0 <= y < n and sumOfNum(x) + sumOfNum(y) <= k:
                s.add((x, y))
                for nx, ny in [(x + 1, y), (x, y + 1)]:
                    q.put((nx, ny))

        return len(s)


if __name__ == '__main__':
    test_cases = [[2, 3, 1], [3, 1, 0]]
    for case in test_cases:
        ans = Solution().movingCount(*case)
        print(ans)
