class Solution:
    def gameOfLife(self, board: [[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        '''
        3 活细胞死亡
        2 死细胞复活
        '''
        def judge(i, j):
            if i < 0 or j < 0 or i >= m or j >= n:
                return 0
            if board[i][j] in [0,2]:
                return 0
            else:
                return 1
        
        if not board or not board[0]:
            return 
        m, n = len(board), len(board[0])
        for i in range(m):
            for j in range(n):
                count = judge(i-1, j-1) +\
                judge(i-1, j) +\
                judge(i-1, j+1) +\
                judge(i, j-1) +\
                judge(i, j+1) +\
                judge(i+1, j-1) +\
                judge(i+1, j) +\
                judge(i+1, j+1) 
                if board[i][j] == 0:
                    if count == 3:
                        board[i][j] = 2
                else:
                    if count < 2:
                        board[i][j] = 3
                    elif count > 3:
                        board[i][j] = 3
        
        dic = {2:1, 3:0}
        for i in range(m):
            for j in range(n):
                board[i][j] = dic.get(board[i][j], board[i][j])