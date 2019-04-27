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
var middleNode = function(head) {
  let A = [head]
  while (A[A.length - 1].next) {
    A.push(A[A.length - 1].next)
  }
  return A[Math.trunc(A.length/2)]
}