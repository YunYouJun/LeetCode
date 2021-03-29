from helpers.py.tree_node import TreeNode, TreeNodeOperation


class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        def recur(A, B):
            if not B:
                return True
            if not A or A.val != B.val:
                return False
            return recur(A.left, B.left) and recur(A.right, B.right)

        return bool(A and B) and (recur(A, B) or self.isSubStructure(A.left, B) or self.isSubStructure(A.right, B))


if __name__ == '__main__':
    test_cases = [[[1, 2, 3], [3, 1]], [[3, 4, 5, 1, 2], [4, 1]]]

    for case in test_cases:
        case[0] = TreeNodeOperation().create_binary_tree(case[0])
        TreeNodeOperation().print(case[0])
        TreeNodeOperation().pre_order(case[0])
        case[1] = TreeNodeOperation().create_binary_tree(case[1])
        TreeNodeOperation().print(case[1])
        ans = Solution().isSubStructure(*case)
        print(ans)
