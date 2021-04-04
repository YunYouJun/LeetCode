from typing import List
import random


class Solution:
    """
    普通快排
    """

    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:

        def partition(low, high):
            pivot = arr[low]
            while low < high:
                while low < high and arr[high] >= pivot:
                    high -= 1
                arr[low] = arr[high]
                while low < high and arr[low] <= pivot:
                    low += 1
                arr[high] = arr[low]
            arr[low] = pivot
            return low

        def quick_sort(arr, low, high):
            if low < high:
                pivot_pos = partition(low, high)
                if pivot_pos == k:
                    return
                elif pivot_pos < k:
                    quick_sort(arr, pivot_pos + 1, high)
                else:
                    quick_sort(arr, low, pivot_pos - 1)

        quick_sort(arr, 0, len(arr) - 1)
        return arr[:k]


if __name__ == '__main__':
    test_cases = [[[3, 2, 1], 2], [[0, 1, 2, 1], 1]]
    for case in test_cases:
        ans = Solution().getLeastNumbers(*case)
        print(ans)
