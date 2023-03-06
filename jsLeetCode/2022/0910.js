// 669 修剪索树
// 根节点root，同时给定最小比边界low喝最大边界high二叉搜
// 通过噢修剪二叉搜索树，使得所有节点的值在[low，high]中
// 修剪树不应该改变保留在树中的元素的相对结构
// 返回修剪好的树的根节点

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */

// 递归
// 当前节点空，返回空
// <low  返回对右节点修剪的结果
// 76ms
// 46.8MB
 var trimBST = function(root, low, high) {
    if(!root){
        return null
    }
    if(root.val < low){
        return trimBST(root.right,low,high)
    }else if(root.val > high){
        return trimBST(root.left,low,high)
    }else{
        root.left = trimBST(root.left,low,high)
        root.right = trimBST(root.right,low,high)
        return root
    }
};