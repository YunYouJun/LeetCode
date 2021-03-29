from typing import List


class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        def recur(i, j):
            if i >= j:
                return True
            p = i
            while postorder[p] < postorder[j]:
                p += 1
            m = p
            while postorder[p] > postorder[j]:
                p += 1
            return p == j and recur(i, m - 1) and recur(m, j - 1)
        return recur(0, len(postorder) - 1)


if __name__ == '__main__':
    test_cases = [[1, 6, 3, 2, 5], [1, 3, 2, 6, 5]]
    for case in test_cases:
        ans = Solution().verifyPostorder(case)
        print(ans)
