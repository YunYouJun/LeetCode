from typing import List


class Solution:
    def permutation(self, s: str) -> List[str]:
        res = []
        n = len(s)

        def backtrack(s, path):
            if not s:
                res.append(path)
            seen = set()
            for i in range(len(s)):
                if s[i] in seen:
                    continue
                seen.add(s[i])
                backtrack(s[:i] + s[i + 1:], path + s[i])

        backtrack(s, "")
        return res


if __name__ == '__main__':
    test_cases = ["abc"]
    for case in test_cases:
        ans = Solution().permutation(case)
        print(ans)
