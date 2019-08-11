class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        last = 0
        while n > 0:
            last = n % 2
            n = n // 2
            if last == n % 2:
                return False
        return True