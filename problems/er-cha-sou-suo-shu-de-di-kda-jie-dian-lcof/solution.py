from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    """
    倒序中序遍历
    """

    def __init__(self):
        self.k = 0
        self.ans = None

    def kthLargest(self, root: TreeNode, k: int) -> int:
        def post_order(root: TreeNode):
            if not root:
                return
            post_order(root.right)
            self.k -= 1
            if self.k == 0:
                self.ans = root.val
            post_order(root.left)

        self.k = k
        post_order(root)
        return self.ans


if __name__ == '__main__':
    test_cases = [[[3, 1, 4, None, 2], 1], [[5, 3, 6, 2, 4, None, None, 1], 3]]
    for case in test_cases:
        case[0] = TreeNodeOperation().create_binary_tree(case[0])
        ans = Solution().kthLargest(*case)
        print(ans)
