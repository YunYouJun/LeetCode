from helpers.py.list_node import ListNode


class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        ans = head
        for _ in range(k):
            head = head.next
        while head:
            head = head.next
            ans = ans.next
        return ans


if __name__ == '__main__':
    test_cases = [[[1, 2, 3, 4, 5], 2]]
    for case in test_cases:
        ans = Solution().getKthFromEnd(*case)
        print(ans)
