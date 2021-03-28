from helpers.py.list_node import ListNode


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        return prev


if __name__ == '__main__':
    test_cases = []
    for case in test_cases:
        ans = Solution().reverseList(case)
        print(ans)
