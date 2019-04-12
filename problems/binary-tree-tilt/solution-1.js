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
var findTilt = function(root) {
  if (!root) return 0
  let abs = Math.abs(sum(root.left) - sum(root.right))
  return findTilt(root.left) + findTilt(root.right) + abs
}

function sum(root) {
  if (!root) return 0
  return root.val + sum(root.left) + sum(root.right)
}