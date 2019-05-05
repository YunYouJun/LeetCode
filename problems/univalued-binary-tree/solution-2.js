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
var isUnivalTree = function(root) {
  let left_correct = (!root.left || (root.val === root.left.val && isUnivalTree(root.left)))
  let right_correct = (!root.right || (root.val === root.right.val && isUnivalTree(root.right)))
  return left_correct && right_correct
}