# 超时
from typing import List
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        res = [0] * len(T)
        for i in range(len(T)):
            cur = T[i]
            if cur < 100:
                for j in range(i+1, len(T)):
                    if T[j] > cur:
                        res[i] = j - i
                        break
        return res