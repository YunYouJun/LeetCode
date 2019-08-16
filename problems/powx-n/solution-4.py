# https://baike.baidu.com/item/%E5%BF%AB%E9%80%9F%E5%B9%82
# 11 = 2^0 + 2^! + 2^3
# a^11 = a^(2^0) + a^(2^1) + a^(2^3)
class Solution:
    def myPow(self, x: float, n: int) -> float:
        N = n
        if N < 0:
            x = 1/x
            N = -N
        ans =  1
        current_product = x
        while N > 0:
            if N % 2 == 1:
                ans = ans * current_product
            current_product = current_product * current_product
            N //= 2
        return ans