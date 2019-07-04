import itertools
class Solution:
    def permute(self, nums: [int]) -> [[int]]:
        return list(itertools.permutations(nums))