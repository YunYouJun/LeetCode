class Solution:
    def rob(self, nums: [int]) -> int:
        sumOdd = 0
        sumEven = 0
        for i in range(len(nums)):
            if i % 2 == 0:
                sumEven += nums[i]
                sumEven = max(sumOdd, sumEven)
            else:
                sumOdd += nums[i]
                sumOdd = max(sumOdd, sumEven)
        return max(sumOdd, sumEven)