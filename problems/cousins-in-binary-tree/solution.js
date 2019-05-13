/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let parent = {}
  let depth = {}
  function dfs(node, par=null) {
    if (node) {
      depth[node.val] = par ? depth[par.val] + 1 : 1
      parent[node.val] = par
      dfs(node.left, node)
      dfs(node.right, node)
    }
  }
  dfs(root)
  return depth[x] === depth[y] && parent[x] !== parent[y]
}