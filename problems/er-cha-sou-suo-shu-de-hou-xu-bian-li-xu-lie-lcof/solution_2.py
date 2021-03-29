from typing import List


class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        stack, root = [], float('+inf')
        for i in range(len(postorder) - 1, -1, -1):
            if postorder[i] > root:
                return False
            while stack and postorder[i] < stack[-1]:
                root = stack.pop()
            stack.append(postorder[i])
        return True


if __name__ == '__main__':
    test_cases = [[1, 6, 3, 2, 5], [1, 3, 2, 6, 5], [1, 3, 2, 5]]
    for case in test_cases:
        ans = Solution().verifyPostorder(case)
        print(ans)
