// 二叉树着色游戏 1145
// 有两位极客参与了 二叉树着色游戏。游戏中给出二叉树的根节点root，树上总共有 n 个节点，其中n为奇数，其中某个节点的值从1到n
// 最开始时
// 1号玩家从 [1, n] 中取一个值 x 红色
// 2号玩家从 [1, n] 中取一个值 y y!=x 蓝色
// 一号先手，每一回合玩家选择一个被他染过色的节点，所选节点一个未着色的邻节点染色
// 如果此种情况下当前玩家无法找到这样的节点来染色，其回合跳过
// 两者都没有可以染色的节点的时候，游戏结束，染色多的获胜
// 根据所给的输入，如果存在y可以确保获胜，返回true

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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */

// 可以选择所选节点的  父节点 或者左右子树 切分为三部分，若某一部分大于其余两部分之和，则必胜
// 变成，统计左右子树节点，统计总结点数 - 当前节点的所有
var btreeGameWinningMove = function (root, n, x) {
  //首先要找到x，再获取他左右子树的个数
  let curNode = findTreeNode(root, x);
  let leftSum = getTreeNum(curNode.left);
  let rightSum = getTreeNum(curNode.right);
  let topSum = n - leftSum - rightSum - 1;
  //   其中某一个区域是占 n+1/2的就返回true
  const winNum = (n + 1) / 2;
  if (leftSum >= winNum || rightSum >= winNum || topSum >= winNum) {
    return true;
  }
  return false;
};

var findTreeNode = function (Node, x) {
  if (!Node) {
    return null;
  }
  if (Node.val === x) {
    return Node;
  } else {
    let find = findTreeNode(Node.left, x);
    if (find) {
      return find;
    }
    find = findTreeNode(Node.right, x);
    if (find) {
      return find;
    }
  }
  return null;
};

var getTreeNum = function (Node) {
  if (!Node) {
    return 0;
  }
  if (!Node.left && !Node.right) {
    return 1;
  }
  return getTreeNum(Node.left) + getTreeNum(Node.right) + 1;
};
