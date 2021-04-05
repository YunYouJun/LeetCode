from helpers.py.tree_node import TreeNode


class Solution:
    """
    层次遍历
    """

    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        queue, res = [root], 0
        while queue:
            tmp = []
            for node in queue:
                if node.left:
                    tmp.append(node.left)
                if node.right:
                    tmp.append(node.right)
            queue = tmp
            res += 1
        return res


if __name__ == '__main__':
    test_cases = []
    for case in test_cases:
        ans = Solution().maxDepth(case)
        print(ans)
