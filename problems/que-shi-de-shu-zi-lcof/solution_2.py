from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        i, j = 0, len(nums) - 1
        while i <= j:
            m = (i + j) // 2
            if nums[m] == m:
                i = m + 1
            else:
                j = m - 1
        return i


if __name__ == '__main__':
    test_cases = [[0, 1, 3], [0, 1, 2, 3, 4, 5, 6, 7, 9], [0]]
    for case in test_cases:
        ans = Solution().missingNumber(case)
        print(ans)
