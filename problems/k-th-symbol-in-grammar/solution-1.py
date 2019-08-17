class Solution:
    def kthGrammar(self, N: int, K: int) -> int:
        def getN(K):
            if K == 0:
                return 0
            elif K == 1:
                return 1
            else:
                if getN(int(K/2)) == 0:
                    if K % 2 == 0:
                        return 0
                    else:
                        return 1
                else:
                    if K % 2 == 0:
                        return 1
                    else:
                        return 0
        return getN(K-1)