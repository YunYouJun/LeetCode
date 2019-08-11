class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        s = bin(n)
        if len(s) == 1: return True
        for i in range(1, len(s)):
            if s[i] == s[i-1]: return False
        return True