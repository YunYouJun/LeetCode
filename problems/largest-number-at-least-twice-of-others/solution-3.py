class Solution:
    def dominantIndex(self, nums: [int]) -> int:
        num_max = max(nums)
        temp = []
        for i in range(len(nums)):
            if 2 * nums[i] > num_max:
                temp.append(i)
                if len(temp) == 2:
                    return -1
        return temp[0]