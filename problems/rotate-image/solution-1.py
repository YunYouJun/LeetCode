class Solution:
    def rotate(self, matrix):
        """
        Do not return anything, modify matrix in-place instead.
        """
        N = len(matrix)
        for n in range(N//2):
            for i in range(N-1-n*2):
                matrix[n][i+n], matrix[i+n][N-1-n], matrix[N-1-n][N-1-i-n], matrix[N-1-i-n][n] = matrix[N-1-i-n][n], matrix[n][i+n], matrix[i+n][N-1-n], matrix[N-1-n][N-1-i-n]
                # matrix[n][i+n], matrix[i+n][N-1-n] = matrix[i+n][N-1-n], matrix[n][i+n]
                # matrix[n][i+n], matrix[N-1-n][N-1-i-n] = matrix[N-1-n][N-1-i-n], matrix[n][i+n]
                # matrix[n][i+n], matrix[N-1-i-n][n] = matrix[N-1-i-n][n], matrix[n][i+n]