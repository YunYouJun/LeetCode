from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        stack = [root]
        while stack:
            node = stack.pop()
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
            node.left, node.right = node.right, node.left
        return root


if __name__ == '__main__':
    test_cases = [[4, 2, 7, 1, 3, 6, 9]]
    for case in test_cases:
        case = TreeNodeOperation().create_binary_tree(case)
        ans = Solution().mirrorTree(case)
        TreeNodeOperation().print(ans)
