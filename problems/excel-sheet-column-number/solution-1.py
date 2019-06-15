class Solution:
    def titleToNumber(self, s: str) -> int:
        return sum((ord(s[i]) - ord('A') + 1)*(26**(len(s) - i - 1)) for i in range(len(s)))