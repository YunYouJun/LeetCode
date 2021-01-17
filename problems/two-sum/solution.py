class Solution:
    def twoSum(self, nums: [int], target: int) -> [int]:
        dic = {}
        for index, num in enumerate(nums):
            if num in dic:
                return [dic[num], index]
            dic[target - num] = index
