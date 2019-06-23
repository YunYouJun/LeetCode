# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def isPalindrome(self, head) -> bool:
        if head == None: return True
        s = []
        node = head
        while node:
            s.append(node.val)
            node = node.next

        while head:
            if head.val != s.pop():
                return False
            head = head.next
        
        return True