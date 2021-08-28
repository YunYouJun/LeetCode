// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function arrayToTree(arr: any[]) {
  const nodeList = arr.map((item) => (item ? new TreeNode(item) : item));
  nodeList.forEach((item, index) => {
    if (item && index * 2 + 1 < nodeList.length) {
      item.left = nodeList[index * 2 + 1];
      item.right = nodeList[index * 2 + 2];
    }
  });
  return nodeList.shift();
}

/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
   假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * @param preorder 
 * @param inorder 
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length < 1) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const index = inorder.indexOf(root.val);
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
}

import { testFunction } from '../../utils';
const testcases = [
  [
    [3, 9, 20, 15, 7],
    [9, 3, 15, 20, 7],
  ],
];
const expectedReults = [arrayToTree([3, 9, 20, null, null, 15, 7])];
testFunction(buildTree, testcases, expectedReults);