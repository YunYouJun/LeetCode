class Solution:
    def plusOne(self, digits: [int]) -> [int]:
        if digits[-1] < 9:
            digits[-1] += 1
        else:
            if len(digits) > 1:
                digits = Solution.plusOne(self, digits[:-1]) + [0]
            else:
                return [1, 0]
        return digits