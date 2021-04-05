class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        res = []
        for i in range(n, len(s)):
            res.append(s[i])
        for i in range(n):
            res.append(s[i])
        return ''.join(res)


if __name__ == '__main__':
    test_cases = [["abcdefg", 2], ["lrloseumgh", 6]]
    for case in test_cases:
        ans = Solution().reverseLeftWords(*case)
        print(ans)
