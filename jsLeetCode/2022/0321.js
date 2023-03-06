// 两数之和 输入BST   635

// 给定一个二叉搜索树和目标结果K，如果BST钟存在两个元素且他们的和
// 等于给定的结果，返回true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
/ * @param {TreeNode} root
/ * @param {number} k
/ * @return {boolean}
 */

// 深度优先搜索+哈希表  84/49.9
 var findTarget = function(root, k) {
    const set = new Set()
    const helper = (root ,k) => {
        if ( !root ) {
            return false
        }
        if ( set.has(k - root.val)) {
            return true
        }
        set.add(root.val)
        return helper(root.left,k) || helper(root.right,k)
    }
    return helper(root,k)
};

// 广度优先搜索+哈希标   88/50.5
var findTarget2 = function(root, k) {
    const set = new Set()
    const queue = []
    queue.push(root)
    while(queue.length) {
        const node = queue.shift()
        if(set.has(k - node.val)) {
            return true
        }
        set.add(node.val)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return false
}

// 因为二叉搜索树的中序遍历是升序遍历
// 可以记录得到一个升序数组,然后用双指针来完成
var findTarget3 = function(root, k) {
    const list = []
    // 中序遍历得到数组
    const helper = (root) => {
        if ( !root ) {
            return 
        }
        helper(root.left)
        list.push(root)
        helper(root.right)
    }
    helper()
    // 双指针遍历首尾,如果加起来大于k,右侧指针左移,小于k左侧指针右移
    let left = 0,right = list.length - 1
    while (left != right) {
    if ( list[left] + list[right] > k) {
        right--
    }
    if ( list[left] + list[right] < k) {
        left++
    }
    if (list[left] + list[right] === k) {
        return true
    }
    }
    return false
}