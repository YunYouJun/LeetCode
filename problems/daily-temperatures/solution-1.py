from typing import List
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        l = len(T)
        res = [0] * l

        for i in range(l-2, -1, -1):
            j = i + 1
            while j < l:
                if T[j] > T[i]:
                    res[i] = j - i
                    break
                elif res[j] == 0:
                    res[i] = 0
                    break
                j += res[j]

        return res