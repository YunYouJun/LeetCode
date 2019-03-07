class Solution:
    def reverseString(self, s: [str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        for i in range(int(len(s)/2)):
            temp = s[-(i + 1)]
            s[-(i + 1)] = s[i]
            s[i] = temp