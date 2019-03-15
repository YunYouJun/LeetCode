class Solution:
    def isPalindrome(self, s: str) -> bool:
        if s is None:
            return True
        s = ''.join(filter(str.isalnum, s)).lower()
        return s == s[::-1]

# isalnum 检测字符串是否由字母和数字组成
