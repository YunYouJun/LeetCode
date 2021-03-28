from helpers.py.list_node import ListNode


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head == None or head.next == None:
            return head
        newHead = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return newHead


if __name__ == '__main__':
    test_cases = []
    for case in test_cases:
        ans = Solution().reverseList(case)
        print(ans)
