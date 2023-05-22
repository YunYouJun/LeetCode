/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0)
  let p = l1
  let q = l2
  let cur = dummyHead
  let carry = 0
  while (p || q) {
    const x = p ? p.val : 0
    const y = q ? q.val : 0
    const sum = x + y + carry
    carry = sum >= 10 ? 1 : 0
    cur.next = new ListNode(sum % 10)
    cur = cur.next
    if (p)
      p = p.next
    if (q)
      q = q.next
  }
  if (carry)
    cur.next = new ListNode(carry)

  return dummyHead.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}
