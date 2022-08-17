// 1302 层数最深叶子节点的和
// 给你一颗二叉树的根节点root，请你返回层数最深的叶子节点的和

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
 * @return {number}
 */
// 层序遍历
// 164ms
// 63.4MB
 var deepestLeavesSum = function (root) {
    let sum = 0
    const queue = []
    let count = 0
    queue.push(root)
    count++
    while (queue.length) {
        const node = queue.shift()
        sum += node.val
        count--
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
        // 当前层最后一个
        if (count == 0) {
            count = queue.length
            if (queue.length) {
                sum = 0
            }
        }
    }
    return sum
};