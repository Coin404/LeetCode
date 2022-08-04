// 翻转二叉树
// 给定一颗二叉树的根节点root，翻转这颗二叉树，并返回其根节点

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
 * @return {TreeNode}
 */

// 68ms
// 41.7MB
 var invertTree = function(root) {
    changeChild(root)
    return root
};

var changeChild = function(root){
    if(root){
        const left = root.left
        root.left = root.right
        root.right = left
        changeChild(root.left)
        changeChild(root.right)
    }else return null
}