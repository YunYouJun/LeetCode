# 暴力法
# 超时
class Solution:
    def kthGrammar(self, N, K):
        lastrow = '0'
        for i in range(N):
            lastrow = "".join('01' if x == '0' else '10' for x in lastrow)
        return lastrow[K-1]