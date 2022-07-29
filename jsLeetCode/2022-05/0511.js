// 449 序列化和反序列化二叉搜索树
// 设计算法序列化和反序列化,没有限制,确保可以序列化为字符串,并且可以反序列化为最初的二叉搜索树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    // 后续遍历
    const list = []
    const postOrder = (root,list) =>{
        if(!root) {
            return
        }
        postOrder(root.left,list)
        postOrder(root.right,list)
        list.push(root.val)
    }
    postOrder(root,list)
    const str = list.join(',')
    return str
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length === 0) {
        return null;
    }
    let arr = data.split(',')
    const length = arr.length
    const stack = []
    // 全部压入栈
    for (let i = 0; i < length; i++) {
        stack.push(parseInt(arr[i]));
    }

    // 构造函数，用以找到比当前值小的和大的值
    const construct = (lower, upper, stack) => {
        if (stack.length === 0 || stack[stack.length - 1] < lower || stack[stack.length - 1] > upper) {
            return null;
        }
        const val = stack.pop();
        const root = new TreeNode(val);
        root.right = construct(val, upper, stack);
        root.left = construct(lower, val, stack);
        return root;
    }

    return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stack);
};


// 利用二叉搜索树的有序性来优化
// 二叉搜索树中序遍历就是排序,利用后序遍历来恢复
// 此时直接根据有序性，根节点在数组末尾，所有左子树的节点均小于根节点，右子树都大于根节点