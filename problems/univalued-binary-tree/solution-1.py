# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isUnivalTree(self, root) -> bool:
        vals = []
        def dfs(node):
            if node:
                vals.append(node.val)
                dfs(node.left)
                dfs(node.right)
        dfs(root)
        return len(set(vals)) == 1