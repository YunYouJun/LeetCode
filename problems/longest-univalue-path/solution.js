/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let ans = 0

  function arrowLength(node) {
    if (!node) return 0
    let leftLength = arrowLength(node.left)
    let rightLength = arrowLength(node.right)
    let leftArrow = 0
    let rightArrow = 0
    if (node.left && node.left.val === node.val) {
      leftArrow = leftLength + 1
    }
    if (node.right && node.right.val === node.val) {
      rightArrow = rightLength + 1
    }
    ans = Math.max(ans, leftArrow + rightArrow)
    return Math.max(leftArrow, rightArrow)
  }
  
  arrowLength(root)
  return ans
}