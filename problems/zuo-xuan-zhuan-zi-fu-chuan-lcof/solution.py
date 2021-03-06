class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        return s[n:] + s[:n]


if __name__ == '__main__':
    test_cases = [["abcdefg", 2], ["lrloseumgh", 6]]
    for case in test_cases:
        ans = Solution().reverseLeftWords(*case)
        print(ans)
