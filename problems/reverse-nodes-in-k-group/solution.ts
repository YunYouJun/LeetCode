import { ListNode } from '@yunyoujun/leetcode-utils'

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function myReverse(head: ListNode, tail: ListNode): [ListNode, ListNode] {
  let prev = tail.next
  let cur: ListNode | null = head
  while (prev !== tail) {
    const next: ListNode | null = cur!.next
    cur!.next = prev
    prev = cur!
    cur = next
  }
  return [tail, head]
}

export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null)
    return null

  const hair = new ListNode(0)
  hair.next = head
  let pre = hair

  while (head) {
    let tail = pre

    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; i++) {
      tail = tail.next!
      if (!tail)
        return hair.next
    }
    const next = tail.next
    const [newHead, newTail] = myReverse(head, tail)
    // 把反转后的链表接回原链表
    pre.next = newHead
    newTail.next = next
    pre = newTail
    head = newTail.next
  }

  return hair.next
}
