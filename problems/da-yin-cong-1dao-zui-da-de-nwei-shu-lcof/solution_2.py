from typing import List


class Solution:
    def printNumbers(self, n: int) -> List[int]:
        return list(range(1, 10 ** n))


if __name__ == '__main__':
    test_cases = [0, 1, 2]
    for case in test_cases:
        ans = Solution().printNumbers(case)
        print(ans)
