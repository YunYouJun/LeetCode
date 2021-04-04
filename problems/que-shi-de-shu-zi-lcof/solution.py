from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        length = len(nums)
        for i in range(length):
            if i != nums[i]:
                return i
        return length


if __name__ == '__main__':
    test_cases = [[0, 1, 3], [0, 1, 2, 3, 4, 5, 6, 7, 9], [0]]
    for case in test_cases:
        ans = Solution().missingNumber(case)
        print(ans)
