# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from helpers.py.tree_node import TreeNode
from typing import List


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def getPath(root: TreeNode, target: TreeNode) -> List[TreeNode]:
            path = list()
            node = root
            while node != target:
                path.append(node)
                if target.val < node.val:
                    node = node.left
                else:
                    node = node.right
            path.append(node)
            return path

        path_p = getPath(root, p)
        path_q = getPath(root, q)
        ancestor = None
        for u, v in zip(path_p, path_q):
            if u == v:
                ancestor = u
            else:
                break
        return ancestor


if __name__ == '__main__':
    test_cases = [
        [[6, 2, 8, 0, 4, 7, 9, None, None, 3, 5], 2, 8],
        [[6, 2, 8, 0, 4, 7, 9, None, None, 3, 5], 2, 4]
    ]
    for case in test_cases:
        ans = Solution().lowestCommonAncestor(*case)
        print(ans)
