
from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    def __init__(self):
        self.pre = None
        self.head = None

    def treeToDoublyList(self, root: 'Node') -> 'Node':
        def in_order(root):
            if not root:
                return
            in_order(root.left)
            if self.pre:
                self.pre.right, root.left = root, self.pre
            else:
                # 记录头节点

                self.head = root
            self.pre = root
            in_order(root.right)

        if not root:
            return
        in_order(root)
        self.head.left, self.pre.right = self.pre, self.head
        return self.head


if __name__ == '__main__':
    test_cases = [[1, 2, 3, 4, 5]]
    for case in test_cases:
        case = TreeNodeOperation().create_binary_tree(case)
        ans = Solution().treeToDoublyList(case)
        print(ans)
