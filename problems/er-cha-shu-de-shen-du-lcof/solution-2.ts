import { TreeNode } from "../../helpers/ts/TreeNode";

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let res = 0;
  let q: TreeNode[] = [root];
  while (q.length) {
    let tmp: TreeNode[] = [];
    for (const node of q) {
      if (node.left) {
        tmp.push(node.left);
      }
      if (node.right) {
        tmp.push(node.right);
      }
    }
    q = tmp;
    res += 1;
  }
  return res;
}
