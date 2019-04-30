class Solution:
    def fairCandySwap(self, A: [int], B: [int]) -> [int]:
        sa, sb = sum(A), sum(B)
        gap = (sb - sa) / 2
        setA = set(A)
        setB = set(B)
        for a in setA:
            if (a + gap) in setB:
                return [a, a + gap]