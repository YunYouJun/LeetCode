from helpers.py.list_node import ListNode


class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        node1, node2 = headA, headB

        while node1 != node2:
            node1 = node1.next if node1 else headB
            node2 = node2.next if node2 else headA

        return node1


# if __name__ == '__main__':
#     test_cases = [[8,
#                    [4, 1, 8, 4, 5],
#                    [5, 0, 1, 8, 4, 5],
#                    2,
#                    3]]
#     for case in test_cases:
#         ans = Solution().getIntersectionNode(case)
#         print(ans)
