class Solution:
    def titleToNumber(self, s: str) -> int:
        res = 0
        for c in s:
            res = res *  26 + ord(c) - ord('A') + 1
        return res