from typing import List


class Solution:
    def findNumberIn2DArray(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        if rows:
            cols = len(matrix[0])

        if matrix is None or rows == 0 or cols == 0:
            return False

        r = 0
        c = cols - 1
        while r < rows and c >= 0:
            num = matrix[r][c]
            if num == target:
                return True
            elif num > target:
                c -= 1
            else:
                r += 1

        return False


if __name__ == '__main__':
    ans = Solution().findNumberIn2DArray([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [
        3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5)
    ans2 = Solution().findNumberIn2DArray([], 7)
    print(ans)
    print(ans2)
