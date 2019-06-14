class Solution:
    def majorityElement(self, nums: [int]) -> int:
        cur = 0
        count = 0
        for num in nums:
            if cur == num:
                count += 1
            else:
                if count == 0:
                    cur = num
                    count += 1
                else:
                    count -= 1
        return cur