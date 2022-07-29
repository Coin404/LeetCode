// 出现次数最多的子树元素和 508
// 给你一个二叉树的根节点Root，请返回出现次数最多的子树元素和
// 如果多个元素出现的次数相同，返回所有出现次数最多的子树元素和，不限顺序
// 一个结点的子树元素和的定义未改结点为根的二叉树上所有结点的元素之和（包括节点本身）
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
 * @return {number[]}
 */

// 88ms   47.4MB
 var findFrequentTreeSum = function(root) {
    const cnt = new Map()
    // 存储了出现最多的次数，之后遍历map找到返回的数组
    let maxCnt = 0 
    // 深度搜索得到每一个的子树和
    const dfs = function(root){
        if(!root){
            return 0 
        }
        const sum = root.val + dfs(root.left) + dfs(root.right)
        cnt.set(sum, (cnt.get(sum) || 0) + 1)
        maxCnt = Math.max(maxCnt, cnt.get(sum));
        return sum
    }
    dfs(root)
    const list = []
    for(const [s,c] of cnt.entries()){
        if( c == maxCnt){
            list.push(s)
        }
    }
    return list
};