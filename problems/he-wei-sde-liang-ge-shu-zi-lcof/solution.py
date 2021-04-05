from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        双指针
        """
        i, j = 0, len(nums) - 1
        while i < j:
            s = nums[i] + nums[j]
            if s > target:
                j -= 1
            elif s < target:
                i += 1
            else:
                return nums[i], nums[j]
        return []

    # def twoSum(self, nums: List[int], target: int) -> List[int]:
    #     """
    #     超时
    #     """
    #     arr = []
    #     for num in nums:
    #         another = target - num
    #         if num in arr:
    #             return [num, another]
    #         else:
    #             arr.append(another)
    #     return []


if __name__ == '__main__':
    test_cases = [[[2, 7, 11, 15], 9], [[10, 26, 30, 31, 47, 60], 40]]
    for case in test_cases:
        ans = Solution().twoSum(*case)
        print(ans)
