# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findTilt(self, root) -> int:
        self.tilt = 0
        self.traverse(root)
        return self.tilt
    def traverse(self, root):
        if not root: return 0
        left = self.traverse(root.left)
        right = self.traverse(root.right)
        self.tilt += abs(left - right)
        return left + right + root.val