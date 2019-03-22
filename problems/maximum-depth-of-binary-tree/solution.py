# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root) -> int:
        # root: TreeNode
        if not root: return 0
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1