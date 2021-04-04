from typing import List
import heapq


class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        if k == 0:
            return []
        hp = [-x for x in arr[:k]]
        heapq.heapify(hp)
        for i in range(k, len(arr)):
            if - hp[0] > arr[i]:
                heapq.heappop(hp)
                heapq.heappush(hp, -arr[i])
        ans = [-x for x in hp]
        return ans


if __name__ == '__main__':
    test_cases = [[[3, 2, 1], 2], [[0, 1, 2, 1], 1]]
    for case in test_cases:
        ans = Solution().getLeastNumbers(*case)
        print(ans)
