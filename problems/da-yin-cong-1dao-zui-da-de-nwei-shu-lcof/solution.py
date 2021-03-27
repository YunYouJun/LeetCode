from typing import List


class Solution:
    def printNumbers(self, n: int) -> List[int]:
        if n <= 0:
            return []
        maxNum = int('9' * n)
        ans = []
        for i in range(maxNum):
            ans.append(i + 1)
        return ans


if __name__ == '__main__':
    test_cases = [-1, 0, 1, 2]
    for case in test_cases:
        ans = Solution().printNumbers(case)
        print(ans)
