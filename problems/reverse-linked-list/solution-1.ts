import type { ListNode } from '@yunyoujun/leetcode-utils'

export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null
  let cur = head

  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
}
