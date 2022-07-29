// 在每个树行中找到最大值 0624
// 给定一颗二叉树的根节点root，请找出该二叉树中每一层的最大值
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 层序遍历，记录当前层的最大值
// 每到下一层刷新值
// 76ms  45.3MB
var largestValues = function (root) {
  let max = -Infinity;
  // 记录答案
  const ans = [];
  const rootList = [];
  // 记录当前的层级
  let height = 1;
  // 记录当前层级一共有多少数
  let sumH = 1;
  rootList.push(root);
  while (rootList.length > 0) {
    const node = rootList.shift();
    if (node.val > max) {
      max = node.val;
    }
    if (node.left) {
      rootList.push(node.left);
    }
    if (node.right) {
      rootList.push(node.right);
    }
    sumH--;
    // 一层结束
    if (sumH == 0) {
      sumH = rootList.length;
      ans.push(max);
      max = -Infinity;
    }
  }
  return ans;
};
