class Solution:
    def singleNumber(self, nums: [int]) -> int:
        # 位运算
        num = nums[0]
        for i in nums[1:]:
            num = num ^ i
        return num