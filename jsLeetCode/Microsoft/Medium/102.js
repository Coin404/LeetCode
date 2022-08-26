// 二叉树的层序遍历
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
 * @return {number[][]}
 */
// 64ms
// 43.3MB
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const ans = [];
  const queue = [];
  let level = [];
  queue.push(root);
  let len = queue.length;
  while (queue.length) {
    const node = queue.shift();
    level.push(node.val);
    len--;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    if (len == 0) {
      len = queue.length;
      ans.push(level);
      level = [];
    }
  }
  return ans;
};
