class Solution:
    def moveZeroes(self, nums: [int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        count = 0
        try:
            while 1:
                nums.remove(0)
                count += 1
        except:
            pass
        if count:
            nums.extend([0] * count)