class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
        res = 0
        count = 32
        while count:
            res <<= 1
            res += n&1
            n >>= 1
            count -= 1
        return int(str(res), 10)