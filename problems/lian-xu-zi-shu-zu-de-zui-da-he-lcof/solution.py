from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        for i in range(1, len(nums)):
            nums[i] += max(nums[i - 1], 0)
        return max(nums)


if __name__ == '__main__':
    test_cases = [[-2, 1, -3, 4, -1, 2, 1, -5, 4]]
    for case in test_cases:
        ans = Solution().maxSubArray(case)
        print(ans)
