class Solution:
    def isNumber(self, s: str) -> bool:
        try:
            float(s)
        except:
            return False
        return True


if __name__ == '__main__':
    test_cases = ['+100', '5e2', '-123', '3.1416', '-1E-16', '0123']
    # test_cases = ['12e', '1a3.14', '1.2.3', '+-5', '12e+5.4']
    for case in test_cases:
        ans = Solution().isNumber(case)
        print(ans)
