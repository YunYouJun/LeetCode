from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def recur(L: TreeNode, R: TreeNode) -> bool:
            if not L and not R:
                return True
            if not L or not R or L.val != R.val:
                return False
            return recur(L.left, R.right) and recur(L.right, R.left)

        if not root:
            return True
        return recur(root.left, root.right)


if __name__ == '__main__':
    test_cases = [[1, 2, 2, 3, 4, 4, 3], [1, 2, 2, None, 3, None, 3]]
    for case in test_cases:
        case = TreeNodeOperation().create_binary_tree(case)
        ans = Solution().isSymmetric(case)
        print(ans)
