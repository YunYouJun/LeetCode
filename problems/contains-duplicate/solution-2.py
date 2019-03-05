class Solution:
    def containsDuplicate(self, nums: [int]) -> bool:
        l1 = len(nums)
        l2 = len(set(nums))
        if l1 == l2:
            return False
        else:
            return True