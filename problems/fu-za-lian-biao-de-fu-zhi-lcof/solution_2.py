from helpers.py.node import Node


class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        def dfs(head: 'Node'):
            if not head:
                return None
            if head in visited:
                return visited[head]
            # create new node
            copy = Node(head.val)
            visited[head] = copy
            copy.next = dfs(head.next)
            copy.random = dfs(head.random)
            return copy
        visited = {}
        return dfs(head)


if __name__ == '__main__':
    test_cases = [[[7, None], [13, 0], [11, 4],
                   [10, 2], [1, 0]], [[1, 1], [2, 1]]]
    for case in test_cases:
        ans = Solution().copyRandomList(case)
        print(ans)
