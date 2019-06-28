from operator import truediv, mul, add, sub

class Solution:
    def judgePoint24(self, nums: [int]) -> bool:
        if not nums: return False
        if len(nums) == 1: return abs(nums[0] - 24) < 1e-6
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i != j:
                    nums2 = [nums[k] for k in range(len(nums)) if i != k != j]
                    for op in (truediv, mul, add, sub):
                        if (op is add or op is mul) and j > i: continue
                        # 避免除数为 0
                        if op is not truediv or nums[j]:
                            nums2.append(op(nums[i], nums[j]))
                            if self.judgePoint24(nums2): return True
                            nums2.pop()
        return False