class Solution:
    def firstUniqChar(self, s: str) -> str:
        position = dict()
        n = len(s)
        for i, ch in enumerate(s):
            if ch in position:
                position[ch] = -1
            else:
                position[ch] = i
        first = n
        for pos in position.values():
            if pos != -1:
                first = pos
                return s[pos]
        return ' '


if __name__ == '__main__':
    test_cases = ["abaccdeff", "", "leetcode", "aadadaad"]
    for case in test_cases:
        ans = Solution().firstUniqChar(case)
        print(ans)
