// 2331 计算布尔二叉树的值
// 叶子结点要么值为0 要么值为1（完整二叉树）
// 非叶子结点要么值为2 要么值为3 其中2表示逻辑或，3表示逻辑与
// 返回根节点 root 的布尔运算值

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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    if(!root.left){
        return root.val
    }
    if(root.left && root.right){
        if(root.val === 2){
            return evaluateTree(root.left) || evaluateTree(root.right)
        }else if(root.val ===3){
            return evaluateTree(root.left) && evaluateTree(root.right)
        }
    }
};