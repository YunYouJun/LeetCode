class Solution:
    def firstUniqChar(self, s: str) -> int:
        for i in range(0, len(s)):
            char = s[i]
            if s.find(char) == s.rfind(char):
                return i
        return -1