from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        votes = 0
        x = None
        for num in nums:
            if votes == 0:
                x = num
            if num == x:
                votes += 1
            else:
                votes -= 1
        return x


if __name__ == '__main__':
    test_cases = [[1, 2, 3, 2, 2, 2, 5, 4, 2], [3, 3, 4]]
    for case in test_cases:
        ans = Solution().majorityElement(case)
        print(ans)
