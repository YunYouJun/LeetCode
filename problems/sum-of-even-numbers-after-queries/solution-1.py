class Solution:
    def sumEvenAfterQueries(self, A: List[int], queries: List[List[int]]) -> List[int]:
        S = sum(a for a in A if a % 2 == 0)
        ans = []
        for v, i in queries:
            if A[i] % 2 == 0: S -= A[i]
            A[i] += v
            if A[i] % 2 == 0: S += A[i]
            ans.append(S)
        return ans