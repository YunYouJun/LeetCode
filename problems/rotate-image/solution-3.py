class Solution:
    def rotate(self, matrix: [[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        matrix[:] = map(list,zip(*matrix[::-1]))  