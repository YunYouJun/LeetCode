class Solution:
    def generate(self, numRows: int) -> [[int]]:
        triangle = []
        for i in range(numRows):
            triangle.append(list(range(i + 1)))
            triangle[i][0] = 1
            triangle[i][i] = 1
            for j in range(1, i):
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        return triangle