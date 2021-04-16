from typing import List

# 双重循环会超时


class Solution:
    def purchasePlans(self, nums: List[int], target: int) -> int:
        nums.sort()
        ans = 0
        i = 0
        j = len(nums) - 1
        while i < j:
            if nums[i] + nums[j] > target:
                j -= 1
            else:
                ans += (j - i)
                i += 1
        return ans % 1000000007


if __name__ == '__main__':
    test_cases = [
        [[2, 5, 3, 5], 6],
        [[2, 2, 1, 9], 10]
    ]
    for case in test_cases:
        ans = Solution().purchasePlans(*case)
        print(ans)
