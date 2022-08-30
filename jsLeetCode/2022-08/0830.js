// 998 最大二叉树2
// 最大树 定义：一棵树，并满足：其中每个节点的值都大于其子树中的任何其他值
// 给你最大树的根节点root和一个整数val
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
// 64ms
// 42,8MB
// 记录前一个节点，往大于该节点的位置遍历，在第一个小于插入值的位置停止
 var insertIntoMaxTree = function(root, val) {
    let pre = null
    let cur = root
    while(cur){
        if(val > cur.val){
            // 直接作为根节点
            if(!pre){
                return new TreeNode(val,root,null)
            }
            // 找到第一个小于的节点，插入
            let node = new TreeNode(val,cur,null)
            cur.right = node
            return root
        }
    }
    // 遍历到最后了
    cur.right = new TreeNode(val)
    return  root
};