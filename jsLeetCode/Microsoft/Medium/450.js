// 删除二叉搜索树中的节点
// 给定一个二叉搜索树的根节点root和一个值key,删除二叉搜索树中的key对应的节点，并保证二叉搜索树的性质不变
// 返回根节点的引用

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    // 找到节点
    let node = root;
    let pre = null;
    while (node && node.val !== key) {
        pre = node;
        if (node.val > key) {
            node = node.left;
        }else{
            node = node.right;
        }
    }
    // 删除节点
    if (!node) {
        return root;
    }
    if (!node.left && !node.right) {
        node = null;
    } else if (!node.right) {
        node = node.left;
    } else if (!node.left) {
        node = node.right;
    } else {
        // 左右节点都在的情况下
        // 找右子树的最左节点上来
        let suc = node.right,
            sucPre = node;
        while (suc.left) {
            sucPre = suc;
            suc = suc.left;
        }
        if (sucPre.val == node.val) {
            sucPre.right = suc.right;
        } else {
            sucPre.left = suc.right
        }
        suc.right = node.right;
        suc.left = node.left;
        node = suc;
    }
    if (!pre) {
        return node;
    } else {
        if (pre.left && pre.left.val == key) {
            pre.left = node;
        } else {
            pre.right = node;
        }
        return root;
    }
};