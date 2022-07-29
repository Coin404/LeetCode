// 965 单值二叉树
// 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树
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
// 56ms
 var isUnivalTree = function(root) {
    const val = root.val
    const a = []
    a.push(root)
    while(a.length != 0){
        let p = a.pop()
        if(p.val != val){
            return false
        } else{
            if(p.left){
                a.push(p.left)
            }
            if(p.right){
                a.push(p.right)
            }
        }
    }
    return true
};