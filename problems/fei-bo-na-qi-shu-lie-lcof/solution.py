class Solution:
    # 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
    def fib(self, n: int) -> int:
        last_f = 0
        last_last_f = 0
        f = 0
        for i in range(1, n+1):
            if i == 1:
                f = 1
            else:
                f = last_last_f + last_f

            f = f % 1000000007

            last_last_f = last_f
            last_f = f

        return f


if __name__ == '__main__':
    ans = Solution().fib(100)
    print(ans)
