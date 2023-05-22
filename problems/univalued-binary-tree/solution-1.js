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
  const vals = []
  function dfs(node) {
    if (node) {
      vals.push(node.val)
      dfs(node.left)
      dfs(node.right)
    }
  }
  dfs(root)
  const set = new Set(vals)
  return set.size === 1
}
