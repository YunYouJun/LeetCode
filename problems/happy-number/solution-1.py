class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        arr = []
        while 1:
            ans = 0
            for c in str(n):
                ans += int(c) ** 2
            if ans == 1: return True
            else: n = ans
            if ans in arr:
                return False
            else:
                arr.append(ans)