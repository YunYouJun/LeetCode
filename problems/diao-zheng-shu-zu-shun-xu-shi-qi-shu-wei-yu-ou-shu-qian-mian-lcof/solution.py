from typing import List


class Solution:
    """
    头尾双指针
    """

    def exchange(self, nums: List[int]) -> List[int]:
        head, tail = 0, len(nums) - 1
        while head < tail:
            if nums[head] % 2 != 0:
                head += 1
                continue
            if nums[tail] % 2 != 1:
                tail -= 1
                continue
            nums[head], nums[tail] = nums[tail], nums[head]
            head += 1
            tail -= 1
        return nums


if __name__ == '__main__':
    test_cases = [[], [24, 6, 9], [3, 4, 99, 80], [1, 2, 3, 4]]
    for case in test_cases:
        ans = Solution().exchange(case)
        print(ans)
