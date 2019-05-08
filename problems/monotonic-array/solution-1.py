class Solution:
    def isMonotonic(self, A: [int]) -> bool:
        store = 0
        for i in range(len(A)-1):
            c = (A[i] > A[i+1]) - (A[i] < A[i+1])
            if c:
                if c != store and store != 0:
                    return False
                store = c
        return True