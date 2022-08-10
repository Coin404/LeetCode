// 二叉树的层平均值
// 给定一个非空二叉树的根节点root，以数组的形式返回每一层节点的平均值

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

// 层序遍历，入队出队，标记每一层
// 80ms
// 46MB
var averageOfLevels = function (root) {
  const ans = [];
  const queue = [];
  let h = 0;
  let len = 0;
  let sum = 0;
  let curLen = 1;
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    sum += node.val;
    len += 1;
    curLen -= 1;
    // 子节点入队
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    // 当前层全部出队
    if (curLen == 0) {
      ans.push(sum / len);
      curLen = queue.length;
      sum = 0;
      len = 0;
      h++;
    }
  }
  return ans;
};
