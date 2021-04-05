from helpers.py.tree_node import TreeNode


class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1


if __name__ == '__main__':
    test_cases = []
    for case in test_cases:
        ans = Solution().maxDepth(case)
        print(ans)
