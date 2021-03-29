class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0
        count = 32
        while count:
            res <<= 1
            res += n & 1
            n >>= 1
            count -= 1
        return int(str(res), 10)
