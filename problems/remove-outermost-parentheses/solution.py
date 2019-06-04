class Solution:
    def removeOuterParentheses(self, S: str) -> str:
        stack = []
        result = ''
        for i, s in enumerate(S):
            if s == '(':
                if not stack:
                    start = i
                stack.append(s)
            else:
                stack.pop()
            if not stack:
                result += S[start+1:i]
        return result