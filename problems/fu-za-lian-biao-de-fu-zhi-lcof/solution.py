from helpers.py.node import Node

import copy


class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        return copy.deepcopy(head)


if __name__ == '__main__':
    test_cases = [[[7, None], [13, 0], [11, 4],
                   [10, 2], [1, 0]], [[1, 1], [2, 1]]]
    for case in test_cases:
        ans = Solution().copyRandomList(case)
        print(ans)
