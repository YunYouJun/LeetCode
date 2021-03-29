from helpers.py.node import Node

import collections


class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        def bfs(head: 'Node'):
            if not head:
                return None
            if head in visited:
                return visited[head]

            # create new node
            copy = Node(head.val)
            queue = collections.deque()
            queue.append(head)
            visited[head] = copy
            while queue:
                tmp = queue.pop()
                if tmp.next and tmp.next not in visited:
                    visited[tmp.next] = Node(tmp.next.val)
                    queue.append(tmp.next)
                if tmp.random and tmp.random not in visited:
                    visited[tmp.random] = Node(tmp.random.val)
                    queue.append(tmp.random)
                visited[tmp].next = visited.get(tmp.next)
                visited[tmp].random = visited.get(tmp.random)
            return copy
        visited = {}
        return bfs(head)


if __name__ == '__main__':
    test_cases = [[[7, None], [13, 0], [11, 4],
                   [10, 2], [1, 0]], [[1, 1], [2, 1]]]
    for case in test_cases:
        ans = Solution().copyRandomList(case)
        print(ans)
