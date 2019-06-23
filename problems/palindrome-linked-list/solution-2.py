# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def isPalindrome(self, head) -> bool:
        if not head or not head.next:
            return True
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        mid = slow 
        pre = None
        while slow:
            slow.next, pre, slow = pre, slow, slow.next
        while head != mid:
            if head.val != pre.val:
                return False
            head = head.next
            pre = pre.next

        return True