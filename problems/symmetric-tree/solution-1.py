# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isMirror(self, left, right):
        if left == None and right == None:
            return True
        if left == None or right == None:
            return False
        return (left.val == right.val) and (self.isMirror(left.left, right.right) and self.isMirror(left.right, right.left))
    def isSymmetric(self, root) -> bool:
        # root: TreeNode
        return self.isMirror(root, root)