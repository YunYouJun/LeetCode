class Solution:
    def countPrimes(self, n: int) -> int:
        nums = [False] * 2 + [True] * (n-2)
        for i in range(2, int(n**0.5) + 1):
            if nums[i]:
                nums[i*i:n:i] = [False] * len(nums[i*i:n:i])
        return nums.count(True)