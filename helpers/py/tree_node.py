from typing import List

from queue import Queue


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class TreeNodeOperation:
    def create_binary_tree(self, data: List[int], i=0) -> TreeNode:
        return self.binary_tree(data, i)

    def binary_tree(self, data: List[int], i=0):
        if i < len(data):
            root = TreeNode(data[i])
            root.left = self.binary_tree(data, 2 * i + 1)
            root.right = self.binary_tree(data, 2 * i + 2)
            return root
        else:
            return None

    def pre_order(self, head: TreeNode):
        """
        非递归
        先序遍历
        """
        stack = [head]
        ans = []
        while stack:
            head = stack.pop()
            ans.append(head.val)
            if head.right:
                stack.append(head.right)
            if head.left:
                stack.append(head.left)

        print(ans)

    def pre_order_2(self, head: TreeNode):
        """
        递归
        先序遍历
        """
        if not head:
            return
        print(head.val)
        self.pre_order(head.left)
        self.pre_order(head.right)

    def print(self, head: TreeNode):
        """
        层次遍历
        """
        q = Queue()
        data = []
        if not head:
            return
        q.put(head)
        data.append(head.val)
        while not q.empty():
            node = q.get()
            if node.left:
                data.append(node.left.val)
                q.put(node.left)
            if node.right:
                data.append(node.right.val)
                q.put(node.right)
        print(data)
