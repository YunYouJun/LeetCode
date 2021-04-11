from typing import List
import random


class Solution:
    def randomized_partition(self, nums: List[int], l: int, r: int):
        pivot = random.randint(l, r)
        nums[pivot], nums[r] = nums[r], nums[pivot]
        i = l - 1
        for j in range(l, r):
            if nums[j] < nums[r]:
                i += 1
                nums[j], nums[i] = nums[i], nums[j]
        i += 1
        nums[i], nums[r] = nums[r], nums[i]
        return i

    def randomized_quicksort(self, nums: List[int], l: int, r: int):
        if r - l <= 0:
            return
        mid = self.randomized_partition(nums, l, r)
        self.randomized_quicksort(nums, l, mid - l)
        self.randomized_quicksort(nums, mid + 1, r)

    def sortArray(self, nums: List[int]) -> List[int]:
        self.randomized_quicksort(nums, 0, len(nums) - 1)
        return nums


if __name__ == '__main__':
    test_cases = [[5, 2, 3, 1], [5, 1, 1, 2, 0, 0]]
    for case in test_cases:
        ans = Solution().sortArray(case)
        print(ans)
