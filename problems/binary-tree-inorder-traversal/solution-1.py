# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    # 递归
    def inorderTraversal(self, root: TreeNode) -> [int]:
        ans = []
        if root:
            if root.left:
                ans += self.inorderTraversal(root.left)
            ans.append(root.val)
            if root.right:
                ans += self.inorderTraversal(root.right)
        return ans