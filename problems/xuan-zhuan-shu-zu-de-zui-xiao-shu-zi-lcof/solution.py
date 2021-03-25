from typing import List


class Solution:
    def minArray(self, numbers: List[int]) -> int:
        if not numbers:
            return None

        for _ in range(len(numbers)):
            minNum = numbers[0]
            if minNum >= numbers[-1]:
                numbers.remove(minNum)
                numbers.append(minNum)
            else:
                return minNum

        return minNum


if __name__ == '__main__':
    test_cases = [[1], [3, 4, 5, 1, 2], [2, 2, 2, 0, 1]]
    for case in test_cases:
        ans = Solution().minArray(case)
        print(ans)
