/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let p = head
  let q = head
  let count = 0
  while (p.next) {
    p = p.next
    count++
  }
  let half = Math.ceil(count / 2)
  while (half) {
    half--
    q = q.next
  }
  return q
}
