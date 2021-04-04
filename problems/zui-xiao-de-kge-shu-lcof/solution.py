from typing import List


class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        arr.sort()
        return arr[:k]


if __name__ == '__main__':
    test_cases = [[[3, 2, 1], 2], [[0, 1, 2, 1], 1]]
    for case in test_cases:
        ans = Solution().getLeastNumbers(*case)
        print(ans)
