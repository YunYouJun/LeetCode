from typing import List


class Solution:
    def findRepeatNumber(self, nums: List[int]) -> int:
        visited = set()
        for num in nums:
            if num in visited:
                return num
            else:
                visited.add(num)


if __name__ == '__main__':
    ans = Solution().findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
    print(ans)
