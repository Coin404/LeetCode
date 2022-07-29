// 找树左下角的值 513
// 给定一个二叉树的根节点root,请找出该二叉树的最底层最左边节点的值
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
 * @return {number}
 */

// 深度优先搜索，每次从左子树开始搜索  72ms  44.7MB
// 每到一个新的高度层，记录遇到的第一个值
// 返回最底层第一次遇到的值
var findBottomLeftValue = function (root) {
  let currentH = 0;
  let ans = root.val;
  const dfs = function (root, height) {
    if (!root) {
      return;
    }
    height++;
    dfs(root.left, height);
    dfs(root.right, height);
    if (height > currentH) {
        ans = root.val;
        currentH = height
      }
  };
  dfs(root, 1);
  return ans;
};
