class Solution:
    def singleNumber(self, nums: [int]) -> int:
        dic = {}
        for num in nums:
            if num in dic:
                dic[num] += 1
            else:
                dic[num] = 1
        for num in nums:
            if dic[num] == 1:
                return num