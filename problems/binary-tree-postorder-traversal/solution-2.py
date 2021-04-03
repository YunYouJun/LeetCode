from typing import List
from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    """
    迭代
    """

    def postorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        if not root:
            return res

        stack = []
        prev = None

        while root or stack:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            if not root.right or root.right == prev:
                res.append(root.val)
                prev = root
                root = None
            else:
                stack.append(root)
                root = root.right
        return res


if __name__ == '__main__':
    test_cases = [[1, None, 2, 3]]
    for case in test_cases:
        case = TreeNodeOperation().create_binary_tree(case)
        ans = Solution().postorderTraversal(case)
        print(ans)
