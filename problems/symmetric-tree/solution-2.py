# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
import queue
class Solution:
    def isSymmetric(self, root) -> bool:
        # root: TreeNode
        q = queue.Queue()
        q.put(root)
        q.put(root)
        while not q.empty():
            t1 = q.get()
            t2 = q.get()
            if t1 == None and t2 == None: continue
            if t1 == None or t2 == None: return False
            if t1.val != t2.val: return False
            q.put(t1.left)
            q.put(t2.right)
            q.put(t1.right)
            q.put(t2.left)
        return True