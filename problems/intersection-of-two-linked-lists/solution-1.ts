import type { ListNode } from '@yunyoujun/leetcode-utils'

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const visited = new Set<ListNode>()
  let temp = headA
  while (temp !== null) {
    visited.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (visited.has(temp))
      return temp

    temp = temp.next
  }
  return null
}
