from typing import List


class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        joker = 0
        nums.sort()  # 数组排序
        for i in range(4):
            if nums[i] == 0:
                joker += 1  # 统计大小王数量
            elif nums[i] == nums[i + 1]:
                return False  # 若有重复，提前返回 false
        return nums[4] - nums[joker] < 5  # 最大牌 - 最小牌 < 5 则可构成顺子


if __name__ == '__main__':
    test_cases = [[1, 2, 3, 4, 5], [0, 0, 1, 2, 5]]
    for case in test_cases:
        ans = Solution().isStraight(case)
        print(ans)
