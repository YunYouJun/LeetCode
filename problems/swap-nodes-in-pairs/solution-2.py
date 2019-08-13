# 非递归
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        pre = ListNode(0)
        pre.next = head
        temp = pre
        while temp.next != None and temp.next.next != None:
            start = temp.next
            end = temp.next.next
            temp.next = end
            start.next = end.next
            end.next = start
            temp = start
        return pre.next