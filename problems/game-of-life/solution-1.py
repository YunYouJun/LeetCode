import copy
class Solution:
    def gameOfLife(self, board: [[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        def getAliveCellNum(board, m, n, M, N):
            count = 0
            if m > 0:
                count += board[m-1][n]
            if n > 0:
                count += board[m][n-1]
            if m < M - 1:
                count += board[m+1][n]
            if n < N -1:
                count += board[m][n+1]
            if m > 0 and n > 0:
                count += board[m-1][n-1]
            if m < M - 1 and n < N - 1:
                count += board[m+1][n+1]
            if m > 0 and n < N - 1:
                count += board[m-1][n+1]
            if m < M - 1 and n > 0:
                count += board[m+1][n-1]
            return count

        M = len(board)
        N = len(board[0])
        ans = copy.deepcopy(board)
        for m in range(M):
            for n in range(N):
                count = getAliveCellNum(ans, m, n, M, N)
                if board[m][n] == 1:
                    if count < 2 or count > 3:
                        board[m][n] = 0
                else:
                    if count == 3:
                        board[m][n] = 1