// 输出二叉树 655
// 给你一个二叉树的根节点root，请构造一个下标从0开始，大小为m * n的字符矩阵res，
// 用以表示树的格式化布局。构造此格式化布局矩阵需要遵循以下规则：
// -树的高度为height ，矩阵的行数m应该等于height+1
// -矩阵的列数n应该等于 2^height+1  - 1
// -根节点需要放置在顶行的正中间，对应位置为  res[0][(n-1)/2]
// -对于放置在矩阵中的每个节点，设对应位置为res[r][c],将其左节点放置在
// res[r+1][c-2^height-r-1]右节点res[r+1][c+2^height-r-1]
// 任意空单元格都包括空字符串“”

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
 * @return {string[][]}
 */
// 获取高度，建立数组
// 递归左右子树，数组赋值
// 56ms
// 41.8MB
// 广度优先搜索同理，广度得到高度，然后建立数组
// 再来一次，左右子树建立数组
var printTree = function (root) {
  const getHeight = (root) => {
    let h = 0;
    if (root.left) {
      h = Math.max(h, getHeight(root.left) + 1);
    }
    if (root.right) {
      h = Math.max(h, getHeight(root.right) + 1);
    }
    return h;
  };

  const dfs = (res, root, r, c, height) => {
    res[r][c] = root.val.toString();
    if (root.left) {
      dfs(res, root.left, r + 1, c - (1 << (height - r - 1)), height);
    }
    if (root.right) {
      dfs(res, root.right, r + 1, c + (1 << (height - r - 1)), height);
    }
  };

  const height = getHeight(root);
  const m = height + 1;
  const n = (1 << (height + 1)) - 1;
  const res = new Array(m).fill(0).map(() => new Array(n).fill(""));
  dfs(res, root, 0, Math.floor((n - 1) / 2), height);
  return res;
};
