from typing import List


class Solution:
    def findContinuousSequence(self, target: int) -> List[List[int]]:
        """
        至少含有两个数，必然是奇数
        """
        i, j, res = 1, 2, []
        while i < j:
            j = (-1 + (1 + 4 * (2 * target + i * i - i)) ** 0.5) / 2
            if i < j and j == int(j):
                res.append(list(range(i, int(j) + 1)))

            i += 1
        return res


if __name__ == '__main__':
    test_cases = [9, 15]
    for case in test_cases:
        ans = Solution().findContinuousSequence(case)
        print(ans)
