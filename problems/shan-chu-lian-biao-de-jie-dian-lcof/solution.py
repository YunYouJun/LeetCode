# Definition for singly-linked list.
from helpers.py.list_node import build_list_node, print_list_node


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        if head.val == val:
            return head.next
        pre, cur = head, head.next
        while cur and cur.val != val:
            pre, cur = cur, cur.next
        if cur:
            pre.next = cur.next
        return head


# tree test
if __name__ == '__main__':

    test_cases = [[[4, 5, 1, 9], 5]]

    for case in test_cases:
        case[0] = build_list_node(case[0])
        head = Solution().deleteNode(*case)
        print_list_node(head)
