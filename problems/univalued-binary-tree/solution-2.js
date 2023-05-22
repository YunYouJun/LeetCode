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
const isUnivalTree = function (root) {
  const left_correct = (!root.left || (root.val === root.left.val && isUnivalTree(root.left)))
  const right_correct = (!root.right || (root.val === root.right.val && isUnivalTree(root.right)))
  return left_correct && right_correct
}
