// 623 在二叉树中增加一行
// 给定一个二叉树的根root和两个整数val 和 depth，在给定深度depth处增加一个值为val的节点航
// 根节点root位于深度1
// 加法规则如下
// 1.给定整数depth，对于深度 depth -1 的每个非空树节点cur，创建两个值为val的树节点作为cur的左右子树根
// 2.cur原来的左子树应该是新的左子树根的左子树
// 3.cur原来的右子树应该是新的右子树根的右子树
// 4.如果depth == 1 意味着 depth -1根本没有深度，那么创建一个新的根节点

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
 * @param {number} depth
 * @return {TreeNode}
 */

// 问题可以转化为寻找深度为 depth-1 的子树
// 深搜
// 84ms
// 46.8MB
var addOneRow = function (root, val, depth) {
  if (depth == 1) {
    const newRoot = new TreeNode(val, root, null);
    return newRoot;
  } else {
    dfs(root, 1, val, depth);
  }
  return root;
};

// 交换节点
var newTreeNode = function (root, val) {
  if (root) {
    const newNodeLeft = new TreeNode(val, root.left, null);
    const newNodeRight = new TreeNode(val, null, root.right);
    root.left = newNodeLeft;
    root.right = newNodeRight;
  }
};

// 深度搜索
var dfs = function (root, h, val, depth) {
  if (!root) {
    return;
  }
  if (h < depth - 1) {
    // 向下搜索
    dfs(root.left, h + 1, val, depth);
    dfs(root.right, h + 1, val, depth);
  } else if (h == depth - 1) {
    newTreeNode(root, val);
  } else return;
};
