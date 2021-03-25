from typing import List


class Solution:
    def minArray(self, numbers: List[int]) -> int:
        low, high = 0, len(numbers) - 1
        while low < high:
            pivot = low + (high - low) // 2
            if numbers[pivot] < numbers[high]:
                high = pivot
            elif numbers[pivot] > numbers[high]:
                low = pivot + 1
            else:
                high -= 1
        return numbers[low]


if __name__ == '__main__':
    test_cases = [[1], [3, 4, 5, 1, 2], [2, 2, 2, 0, 1]]
    for case in test_cases:
        ans = Solution().minArray(case)
        print(ans)
