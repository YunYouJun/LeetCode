class Solution:
    def toLowerCase(self, str: str) -> str:
        ans = ''
        for s in str:
            if 65 <= ord(s) <= 90:
                s = chr(ord(s) + 32)
            ans += s
        return ans