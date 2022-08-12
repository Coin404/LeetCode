// 二叉搜索树中的搜索
// 给定二叉搜索树（BST）的根节点root 和一个整数 val
// 你需要在BST 中找到节点值等于 val 的节点。返回该节点为根的子树。
// 如果节点不存在，返回null
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
 * @param {number} val
 * @return {TreeNode}
 */
// 层序遍历
// 80ms
// 48.3MB
var searchBST = function (root, val) {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    if (node.val == val) {
      return node;
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return null;
};

// 递归呢？
// 76ms
// 48.5MB
var searchBST2 = function (root, val) {
  if (!root) {
    return null;
  }
  if (val == root.val) {
    return root;
  }
  return searchBST2(val < root.val ? root.left : root.right, val);
};

// 迭代呢
// 72ms
// 48.3MB
var searchBST3 = function (root, val) {
  while (root) {
    if (root.val == val) {
      return root;
    }
    root = val < root.val ? root.left : root.right;
  }
  return null;
};
