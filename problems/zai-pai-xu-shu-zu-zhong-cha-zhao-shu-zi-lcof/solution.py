from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        count = 0
        for i in nums:
            if i == target:
                count += 1
        return count


if __name__ == '__main__':
    test_cases = [[[5, 7, 7, 8, 8, 10], 8], [[5, 7, 7, 8, 8, 10], 6]]
    for case in test_cases:
        ans = Solution().search(*case)
        print(ans)
