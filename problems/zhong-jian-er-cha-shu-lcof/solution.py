from typing import List

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        def buildTreeByDetails(preorder_left: int, preorder_right: int, inorder_left: int, inorder_right: int):
            if preorder_left > preorder_right:
                return None

            # 前序遍历中的第一个节点就是根节点
            preorder_root = preorder_left
            # 在中序遍历中定位根节点
            inorder_root = index[preorder[preorder_root]]

            # 得到左子树中的节点数目
            size_left_subtree = inorder_root - inorder_left

            # 根结点
            root = TreeNode(preorder[preorder_root])
            root.left = buildTreeByDetails(
                preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1)
            root.right = buildTreeByDetails(
                preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right)
            return root

        # 构造哈希映射，帮助我们快速定位根节点
        index = {element: i for i, element in enumerate(inorder)}

        n = len(preorder)
        return buildTreeByDetails(0, n-1, 0, n-1)
