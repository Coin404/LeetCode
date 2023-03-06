// 面试者 04.06 后继者
// 设计一个算法，找出二叉树搜索树中指定节点的下一个节点，中序后继
// 如果没有指定节点就返回下一个

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

// 右子树不空
// 右子树的最左边节点

// 根据二叉搜索树的性质
// 遍历，如果小于当前，到右子树
// 大于，拿该值更新，到左子树

// 80ms
 var inorderSuccessor = function(root, p) {
    let cur = root ,ans =null
    if(cur.right){
        ans = p.right
        while(ans.left){
            ans = ans.left
        }
        return left
    }

    let node = root
    while(node){
        if(node.val > p.val) {
            ans = node
            node = node.left
        } else {
            node = node.right
        }
    }
    return ans
};