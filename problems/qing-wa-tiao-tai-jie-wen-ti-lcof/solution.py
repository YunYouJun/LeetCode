class Solution:
    """
    由于 Python 中整形数字的大小限制 取决计算机的内存 （可理解为无限大），因此可不考虑大数越界问题。
    """

    def numWays(self, n: int) -> int:
        last_ways, ways = 1, 1
        for _ in range(1, n):
            last_ways, ways = ways, last_ways + ways
        return ways % 1000000007
