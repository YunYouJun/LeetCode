import re


class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # '$' 匹配字符串的末尾
        return bool(re.match(p + '$', s))


if __name__ == '__main__':
    test_cases = [["aa", "a"], ["aa", "a*"],
                  ["ab", ".*"], ["aab", "c*a*b"], ["mississippi", "mis*is*p*."]]
    for case in test_cases:
        ans = Solution().isMatch(*case)
        print(ans)
