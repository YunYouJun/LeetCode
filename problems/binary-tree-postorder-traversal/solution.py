from typing import List
from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    """
    递归
    """

    def postorderTraversal(self, root: TreeNode) -> List[int]:
        def postorder(root: TreeNode):
            if not root:
                return
            postorder(root.left)
            postorder(root.right)
            res.append(root.val)

        res = []
        postorder(root)
        return res


if __name__ == '__main__':
    test_cases = [[1, None, 2, 3]]
    for case in test_cases:
        case = TreeNodeOperation().create_binary_tree(case)
        ans = Solution().postorderTraversal(case)
        print(ans)
