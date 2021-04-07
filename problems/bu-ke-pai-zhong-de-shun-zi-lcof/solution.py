from typing import List


class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        repeat = set()
        ma, mi = 0, 14
        for num in nums:
            if num == 0:
                continue  # 跳过大小王
            ma = max(ma, num)  # 最大牌
            mi = min(mi, num)  # 最小牌
            if num in repeat:
                return False  # 若有重复，提前返回 false
            repeat.add(num)  # 添加牌至 Set
        return ma - mi < 5  # 最大牌 - 最小牌 < 5 则可构成顺子


if __name__ == '__main__':
    test_cases = [[1, 2, 3, 4, 5], [0, 0, 1, 2, 5]]
    for case in test_cases:
        ans = Solution().isStraight(case)
        print(ans)
