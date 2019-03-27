/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let i = 0
  while (head) {
    if (head.index) {
      return head.index
    } else {
      head.index = i
    }
    i++
    head = head.next
  }
  return false
}