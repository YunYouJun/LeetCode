from typing import List

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# 迭代
# todo


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
