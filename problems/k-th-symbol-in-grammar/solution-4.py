class Solution(object):
    def kthGrammar(self, N, K):
        return bin(K - 1).count('1') % 2