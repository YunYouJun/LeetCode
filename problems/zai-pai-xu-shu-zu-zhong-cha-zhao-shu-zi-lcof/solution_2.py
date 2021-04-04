from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def helper(tar):
            i, j = 0, len(nums) - 1
            while i <= j:
                m = (i + j) // 2
                if nums[m] <= tar:
                    i = m + 1
                else:
                    j = m - 1
            return i
        return helper(target) - helper(target - 1)


if __name__ == '__main__':
    test_cases = [[[5, 7, 7, 8, 8, 10], 8], [[5, 7, 7, 8, 8, 10], 6]]
    for case in test_cases:
        ans = Solution().search(*case)
        print(ans)
