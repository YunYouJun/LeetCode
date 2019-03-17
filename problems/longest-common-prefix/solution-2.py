class Solution:
    def longestCommonPrefix(self, strs: [str]) -> str:
        r = ""
        if len(strs) == 0:
            return ""
        for each in zip(*strs):
            if len(set(each)) == 1:
                r += each[0]
            else:
                return r
        return r