class Solution:
    def longestCommonPrefix(self, strs: [str]) -> str:
        if len(strs) == 0:
            return ''
        minL = len(strs[0])
        for s in strs:
            l = len(s)
            if minL > l:
                minL = l
        if minL == 0:
            return ''
        i = 0
        for i in range(minL):
            _s = strs[0][i]
            for s in strs:
                if s[i] != _s:
                    return s[:i]
        return strs[0][:i+1]