// 二叉树的锯齿层序遍历
// 给你一个二叉树的根节点root，返回其节点值的锯齿形层序遍历（先从左往右，再从右往左到下一层）

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

// 72ms
// 43MB
var zigzagLevelOrder = function (root) {
    if (!root) {
      return [];
    }
    let h = 0;
    let len = 1;
    const queue = [];
    const ans = [];
    queue.push(root);
    while (queue.length) {
      const seq = [];
      if ((h % 2) == 0) {
        while (len > 0) {
          const node = queue.shift();
          seq.push(node.val);
          len--;
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
        }
      } else {
        while (len > 0) {
          const node = queue.pop();
          seq.push(node.val);
          len--;
          if (node.right) {
            queue.unshift(node.right);
          }
          if (node.left) {
            queue.unshift(node.left);
          }
        }
      }
      h++
      if (len == 0) {
        len = queue.length;
      }
      ans.push(seq);
    }
    return ans;
  };