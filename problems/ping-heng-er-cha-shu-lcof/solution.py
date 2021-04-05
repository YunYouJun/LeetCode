from helpers.py.tree_node import TreeNode


class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def recur(root: TreeNode):
            if not root:
                return 0
            left = recur(root.left)
            if left == -1:
                return - 1
            right = recur(root.right)
            if right == -1:
                return - 1
            return max(left, right) + 1 if abs(left - right) <= 1 else - 1

        return recur(root) != -1


if __name__ == '__main__':
    test_cases = []
    for case in test_cases:
        ans = Solution().isBalanced(case)
        print(ans)
