/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  return isMirror(root, root)
}

function isMirror(left, right) {
  if (left === null && right === null)
    return true

  if (left === null || right === null)
    return false

  return (left.val === right.val) && (isMirror(left.left, right.right) && isMirror(left.right, right.left))
}
