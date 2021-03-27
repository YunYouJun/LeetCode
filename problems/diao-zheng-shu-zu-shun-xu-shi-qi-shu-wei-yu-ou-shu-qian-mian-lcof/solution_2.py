from typing import List


class Solution:
    """
    快慢双指针
    """

    def exchange(self, nums: List[int]) -> List[int]:
        low, fast = 0, 0
        while fast < len(nums):
            if nums[fast] & 1:
                nums[low], nums[fast] = nums[fast], nums[low]
                low += 1
            fast += 1
        return nums


if __name__ == '__main__':
    test_cases = [[], [24, 6, 9], [3, 4, 99, 80], [1, 2, 3, 4]]
    for case in test_cases:
        ans = Solution().exchange(case)
        print(ans)
