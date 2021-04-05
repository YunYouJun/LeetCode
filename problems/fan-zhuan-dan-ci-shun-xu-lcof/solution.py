class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(s.strip().split()[::-1])


if __name__ == '__main__':
    test_cases = ["the sky is blue", "  hello world!  ", "a good   example"]
    for case in test_cases:
        ans = Solution().reverseWords(case)
        print(ans)
