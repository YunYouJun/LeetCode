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
const reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur !== null) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}
