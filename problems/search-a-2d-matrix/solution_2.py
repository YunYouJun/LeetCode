from typing import List


class Solution:
    """
    O(logmn)
    """

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix:
            return False
        m, n = len(matrix), len(matrix[0])
        low, high = 0, m * n - 1
        while low <= high:
            mid = (high - low) // 2 + low
            x = matrix[mid // n][mid % n]
            if x < target:
                low = mid + 1
            elif x > target:
                high = mid - 1
            else:
                return True
        return False


if __name__ == '__main__':
    test_cases = [[[], 0], [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], [
        [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13]]
    for case in test_cases:
        ans = Solution().searchMatrix(*case)
        print(ans)
