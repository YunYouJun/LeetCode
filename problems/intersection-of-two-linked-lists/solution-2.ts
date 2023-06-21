import type { ListNode } from '@yunyoujun/leetcode-utils'

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let tempA = headA
  let tempB = headB
  while (tempA !== tempB) {
    tempA = tempA === null ? headB : tempA.next
    tempB = tempB === null ? headA : tempB.next
  }
  return tempA
}
