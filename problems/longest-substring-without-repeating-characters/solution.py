class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = 0
        dic = {}
        i = 0
        for j in range(len(s)):
            i = max(dic.get(s[j], 0), i)
            ans = max(ans, j - i + 1)
            dic[s[j]] = j + 1
        return ans