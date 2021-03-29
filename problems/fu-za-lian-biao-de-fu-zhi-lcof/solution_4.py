from helpers.py.node import Node

import collections


class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        def getClonedNode(node):
            if node:
                if node in visited:
                    return visited[node]
                else:
                    visited[node] = Node(node.val)
                    return visited[node]
            return None

        visited = {}

        if not head:
            return head
        old_node = head
        new_node = Node(old_node.val)
        visited[old_node] = new_node

        while old_node:
            new_node.random = getClonedNode(old_node.random)
            new_node.next = getClonedNode(old_node.next)

            old_node = old_node.next
            new_node = new_node.next
        return visited[head]


if __name__ == '__main__':
    test_cases = [[[7, None], [13, 0], [11, 4],
                   [10, 2], [1, 0]], [[1, 1], [2, 1]]]
    for case in test_cases:
        ans = Solution().copyRandomList(case)
        print(ans)
