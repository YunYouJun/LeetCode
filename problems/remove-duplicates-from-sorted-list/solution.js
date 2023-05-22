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
const deleteDuplicates = function (head) {
  let p = head
  if (head) {
    while (p.next) {
      if (p.val === p.next.val)
        p.next = p.next.next
      else
        p = p.next
    }
  }
  return head
}
