class Solution:
    def romanToInt(self, s: str) -> int:
        dic = {'I':1, 'V':5, 'X':10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        ans = 0
        for i in range(len(s) - 1):
            ans = ans - dic[s[i]] if dic[s[i]] < dic[s[i+1]] else ans + dic[s[i]]
        return ans + dic[s[-1]]