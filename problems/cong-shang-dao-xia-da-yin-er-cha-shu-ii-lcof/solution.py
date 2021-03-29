from typing import List
from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        import collections
        if not root:
            return []
        res, queue = [], collections.deque()
        queue.append(root)
        while queue:
            tmp = []
            for _ in range(len(queue)):
                node = queue.popleft()
                tmp.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            res.append(tmp)
        return res


if __name__ == '__main__':
    test_cases = [[3, 9, 20, None, None, 15, 7], [
        0, 2, 4, 1, None, 3, -1, 5, 1, None, 6, None, 8]]
    for case in test_cases:
        case = TreeNodeOperation().create_binary_tree(case)
        ans = Solution().levelOrder(case)
        print(ans)
