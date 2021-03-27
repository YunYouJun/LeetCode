from typing import List


class Solution:
    def __init__(self):
        self.nine = 0
        self.start = 0

    def printNumbers(self, n: int) -> [int]:
        def dfs(x):
            if x == n:
                s = ''.join(num[self.start:])
                if s != '0':
                    res.append(int(s))
                if n - self.start == self.nine:
                    self.start -= 1
                return
            for i in range(10):
                if i == 9:
                    self.nine += 1
                num[x] = str(i)
                dfs(x + 1)
            self.nine -= 1

        if n == 0:
            return []
        num, res = ['0'] * n, []
        self.start = n - 1
        dfs(0)
        return res


if __name__ == '__main__':
    test_cases = [0, 1, 2]
    for case in test_cases:
        ans = Solution().printNumbers(case)
        print(ans)
