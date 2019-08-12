class Solution:
    def removeDuplicates(self, S: str) -> str:
        ans = []
        for c in S:
            if ans and c == ans[-1]:
                ans.pop()
            else:
                ans.append(c)
        return ''.join(ans)