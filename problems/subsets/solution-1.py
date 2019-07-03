import itertools
class Solution:
    def subsets(self, nums: [int]) -> [[int]]:
        res = []
        for i in range(len(nums) + 1):
            for tmp in itertools.combinations(nums, i):
                res.append(tmp)
        return res