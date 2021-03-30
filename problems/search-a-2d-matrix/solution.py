from typing import List


class Solution:
    """
    O(mn)
    """

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for row in matrix:
            if row[-1] >= target:
                for i in row:
                    if i == target:
                        return True

        return False


if __name__ == '__main__':
    test_cases = [[[], 0], [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], [
        [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13]]
    for case in test_cases:
        ans = Solution().searchMatrix(*case)
        print(ans)
