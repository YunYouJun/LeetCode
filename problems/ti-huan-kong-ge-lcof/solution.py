class Solution:
    def replaceSpace(self, s: str) -> str:
        temp = []
        for c in s:
            if c == ' ':
                temp.append('%20')
            else:
                temp.append(c)
        return "".join(temp)
