class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        while n:
            res += n & 1
            n >>= 1
        return res


if __name__ == '__main__':
    test_cases = [0x1011, 0x11111111111111111111111111111101]
    for case in test_cases:
        ans = Solution().hammingWeight(case)
        print(ans)
