class Solution:
    def subsets(self, nums: [int]) -> [[int]]:
        res = [[]]
        for i in nums:
            res += [[i] + num for num in res]
        return res