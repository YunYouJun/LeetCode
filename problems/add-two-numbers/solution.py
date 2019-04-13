# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def addTwoNumbers(self, l1, l2):
        dummyHead = ListNode(0)
        p, q = l1, l2
        cur = dummyHead
        carry = 0
        while p or q:
            x = p.val if p else 0
            y = q.val if q else 0
            sum = carry + x + y
            carry = sum // 10
            cur.next = ListNode(sum % 10)
            cur = cur.next
            if p: p = p.next
            if q: q = q.next
        if carry:
            cur.next = ListNode(carry)
        return dummyHead.next
