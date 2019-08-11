class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        return not ('00' in str(bin(n)) or '11' in str(bin(n)))