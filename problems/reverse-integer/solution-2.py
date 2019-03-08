class Solution:
    def reverse(self, x: int) -> int:
        rev = 0
        max_int = 2**31 - 1
        min_int = -2**31
        minus = False
        if x < 0:
            minus = True
            x = -x
        while x != 0:
            pop = x % 10
            x = int(x/10)
            if minus:
                if (-rev < int(min_int/10)) or (-rev == int(min_int/10) and pop > 8):
                    return 0
            else:
                if (rev > int(max_int/10)) or (rev == int(max_int/10) and pop > 7):
                    return 0
            rev = rev * 10 + pop
        if minus:
            return -rev
        else:
            return rev