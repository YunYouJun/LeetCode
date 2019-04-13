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
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0)
  let p = l1, q = l2, cur = dummyHead
  let carry = 0
  while (p || q) {
    let x = p ? p.val : 0
    let y = q ? q.val : 0
    let sum = x + y + carry
    carry = sum >= 10 ? 1 : 0
    cur.next = new ListNode(sum % 10)
    cur = cur.next
    if (p) p = p.next
    if (q) q = q.next
  }
  if (carry) {
    cur.next = new ListNode(carry)
  }
  return dummyHead.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}