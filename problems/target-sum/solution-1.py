from typing import List
class Solution:
    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        d = {}
        def dfs(i, cur, d):
            if i < len(nums) and (i, cur) not in d:
                d[(i, cur)] = dfs(i + 1, cur + nums[i], d) + dfs(i + 1, cur - nums[i], d)
            return d.get((i, cur), int(cur == S))
        return dfs(0, 0, d)