from typing import List
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        stack = []
        l = len(T)
        res = [0] * l
        
        for i in range(l):
            while len(stack) > 0 and T[i] > T[stack[-1]]:
                s = stack.pop()
                res[s] = i - s
            stack.append(i)

        return res

# 一次遍历