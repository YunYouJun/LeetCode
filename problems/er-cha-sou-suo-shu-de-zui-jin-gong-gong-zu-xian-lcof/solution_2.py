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
        ancestor = root
        while True:
            if p.val < ancestor.val and q.val < ancestor.val:
                ancestor = ancestor.left
            elif p.val > ancestor.val and q.val > ancestor.val:
                ancestor = ancestor.right
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
