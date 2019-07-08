class Solution:
    def partition(self, s: str) -> [[str]]:
        split_res = []
        if len(s) == 0: return split_res
        def back(start=0, res=[]):
            if start >= len(s):
                split_res.append(res)
                return
            for end in range(start+1, len(s)+1):
                split_s = s[start:end]
                if split_s == s[start:end][::-1]:
                    back(end, res+[split_s])
        back()
        return split_res