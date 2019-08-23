class Solution:
    def addBinary(self, a: str, b: str) -> str:
        ans = ''
        ca = 0
        i = len(a) - 1
        j = len(b) - 1
        while i >= 0  or j >= 0:
            sum_n = ca
            sum_n += int(a[i]) if i >= 0 else 0
            sum_n += int(b[j]) if j >= 0 else 0
            ans += str(sum_n % 2)
            ca = sum_n // 2
            i -= 1
            j -= 1
        ans += '1' if ca == 1 else ''
        return ''.join(reversed(list(ans)))