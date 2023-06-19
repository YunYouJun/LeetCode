import type { ListNode } from '@yunyoujun/leetcode-utils'

export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null)
    return head

  const p = reverseList(head.next)
  head.next.next = head
  head.next = null

  return p
}
