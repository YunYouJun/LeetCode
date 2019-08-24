# 超时
class Solution:
    def twoSum(self, numbers: [int], target: int) -> [int]:
        for i in range(len(numbers)):
            for j in range(i+1, len(numbers)):
                sum_num = numbers[i] + numbers[j]
                if sum_num == target:
                    return [i+1, j+1]
                elif sum_num > target:
                    break
                else:
                    continue