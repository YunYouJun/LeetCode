from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        dic = {}
        for num in nums:
            if num not in dic:
                dic[num] = 1
            else:
                dic[num] += 1
        for key, value in dic.items():
            if value == 1:
                return key


if __name__ == '__main__':
    test_cases = [[3, 4, 3, 3], [9, 1, 7, 9, 7, 9, 7]]
    for case in test_cases:
        ans = Solution().singleNumber(case)
        print(ans)
