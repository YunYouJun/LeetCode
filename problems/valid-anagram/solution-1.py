class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dic = {}
        for c in s:
            dic[c] = dic.get(c, 0) + 1
        for c in t:
            if c not in dic:
                return False
            dic[c] -= 1
            if dic[c] < 0:
                return False
        return not sum(dic.values())