// 654 最大二叉树
// 给定一个不重复的整数数组nums。最大二叉树可以用下面的算法从nums递归地构建。
// 创建一个根节点，其值为nums中的最大值
// 递归地在最大值左边的子数组前缀上构建左子树
// 递归地在最大值右边的子数组后缀上构建右子树
// 返回nums构建的最大二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 递归解法，非单调栈最佳解答
// 116ms
// 47.8MB
var constructMaximumBinaryTree = function (nums) {
  if (nums.length <= 0) {
    return null;
  }
  let max = nums[0];
  let position = 0;
  // 找到最大值
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      position = i;
    }
  }
  // 切分数组
  const numsLeft = nums.slice(0, position);
  const numsRight = nums.slice(position + 1, nums.length);
  // 构建二叉树
  const root = new TreeNode(
    nums[position],
    constructMaximumBinaryTree(numsLeft),
    constructMaximumBinaryTree(numsRight)
  );
  return root;
};
