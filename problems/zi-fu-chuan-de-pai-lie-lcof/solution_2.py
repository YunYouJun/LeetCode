from typing import List


class Solution:
    def permutation(self, s: str) -> List[str]:
        c, res = list(s), []

        def dfs(x):
            if x == len(c) - 1:
                res.append(''.join(c))
                return
            dic = set()

            for i in range(x, len(c)):
                if c[i] in dic:
                    continue
                dic.add(c[i])
                c[i], c[x] = c[x], c[i]
                dfs(x + 1)
                c[i], c[x] = c[x], c[i]

        dfs(0)
        return res


if __name__ == '__main__':
    test_cases = ["abc", "aab"]
    for case in test_cases:
        ans = Solution().permutation(case)
        print(ans)
