// 将有序数组转换为二叉搜索树
// 整数数组nums，其中元素已经按 升序 排序，请你将其转换为一颗 高度平衡 二叉搜索树
// 高度平衡 二叉树是一颗满足 [ 每个节点的左右两个子树的高度差的绝对值不超过1 ] 的二叉树
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

// 72ms
// 43.7MB
// 已经有序了 直接取中，左右两侧继续
var sortedArrayToBST = function (nums) {
  return buildRoot(nums,0,nums.length -1);
};

var buildRoot = function (nums, start, end) {
  if (start < end) {
    return null;
  }
  const mid = start + Math.floor((end - start) / 2);
  const root = new TreeNode(
    nums[mid],
    buildRoot(nums, start, mid - 1),
    buildRoot(nums, mid + 1, end)
  );
  return root;
};
