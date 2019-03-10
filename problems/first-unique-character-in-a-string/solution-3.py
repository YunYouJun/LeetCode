class Solution:
    def firstUniqChar(self, s: str) -> int:
        uniqS = list(set(s))
        uniqS.sort(key=s.index)
        # 根据 return s.index(uniqS[i]) 来排序
        for c in uniqS:
          if s.count(c) == 1:
              return s.index(c)
        return -1