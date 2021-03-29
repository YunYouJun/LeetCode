from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        root.left, root.right = self.mirrorTree(
            root.right), self.mirrorTree(root.left)
        return root


if __name__ == '__main__':
    test_cases = [[4, 2, 7, 1, 3, 6, 9]]
    for case in test_cases:
        case = TreeNodeOperation().create_binary_tree(case)
        ans = Solution().mirrorTree(case)
        TreeNodeOperation().print(ans)
