class Solution:
    def twoSum(self, numbers: [int], target: int) -> [int]:
        low = 0
        high = len(numbers) - 1
        while low < high:
            sum_num = numbers[low] + numbers[high]
            if sum_num == target:
                return [low+1, high+1]
            elif sum_num < target:
                low += 1
            else:
                high -= 1
        return [-1, -1]