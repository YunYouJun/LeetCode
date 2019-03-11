class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        a = set(s)
        b = set(t)
        if len(a) != len(b):
            return False
        for c in a:
            if s.count(c) != t.count(c):
                return False
        return True