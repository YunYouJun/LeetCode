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
const findTilt = function (root) {
  let tilt = 0
  function traverse(root) {
    if (!root)
      return 0
    const left = traverse(root.left)
    const right = traverse(root.right)
    tilt += Math.abs(left - right)
    return left + right + root.val
  }
  traverse(root)
  return tilt
}
