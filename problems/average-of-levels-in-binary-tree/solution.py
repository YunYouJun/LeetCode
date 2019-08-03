# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def averageOfLevels(self, root: TreeNode) -> [float]:
        ans = []
        lvl = [root]
        while lvl:
            ans.append(sum(n.val for n in lvl) / float(len(lvl)))
            lvl = [c for n in lvl for c in [n.left, n.right] if c]
        return ans