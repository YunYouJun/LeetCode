import collections


class Solution:
    def firstUniqChar(self, s: str) -> str:
        freq = collections.Counter(s)
        for i, ch in enumerate(s):
            if freq[ch] == 1:
                return ch
        return ' '


if __name__ == '__main__':
    test_cases = ["abaccdeff", "", "leetcode", "aadadaad"]
    for case in test_cases:
        ans = Solution().firstUniqChar(case)
        print(ans)
