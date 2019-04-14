/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  return getLeaves(root1).toString() === getLeaves(root2).toString()
}

function getLeaves (root) {
  let leaves = []
  if (!root) return leaves
  if (!root.left && !root.right) {
    leaves.push(root.val)
    return leaves
  }
  leaves = leaves.concat(getLeaves(root.left))
  leaves = leaves.concat(getLeaves(root.right))
  return leaves
}