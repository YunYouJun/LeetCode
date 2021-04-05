from helpers.py.tree_node import TreeNode


class Solution:
    """
    时间复杂度较高
    """

    def depth(self, root: TreeNode):
        if not root:
            return 0
        return max(self.depth(root.left), self.depth(root.right)) + 1

    def isBalanced(self, root: TreeNode) -> bool:
        if not root:
            return True
        return abs(self.depth(root.left) - self.depth(root.right)) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)


if __name__ == '__main__':
    test_cases = []
    for case in test_cases:
        ans = Solution().isBalanced(case)
        print(ans)
