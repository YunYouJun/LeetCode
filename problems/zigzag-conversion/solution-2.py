class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1: return s
        ans = ''
        cycleLen = 2 * numRows - 2
        for i in range(numRows):
            for j in range(0, len(s) - i, cycleLen):
                ans += s[j + i]
                if i != 0 and i != numRows - 1 and j + cycleLen - i < len(s):
                    ans += s[j + cycleLen - i]
        return ans