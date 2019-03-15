import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        regex = re.compile('[^A-Za-z0-9]', flags=re.S)
        s2 = re.sub(regex, '', s).lower()
        l = len(s2)
        for i in range(0, int(l/2)):
            if s2[i] != s2[l-i-1]:
                return False
        return True