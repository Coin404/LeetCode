// 两颗二叉搜索树中的所有元素
// 给你root1，root2这两颗二叉搜索树，请返回一个列表，包含两棵树所有的整数并且按照升序排序

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

// 中序遍历得到两个数组
// 两个数字进行排序
 var getAllElements = function(root1, root2) {
    const num1 = []
    const num2 = []

    // 中序遍历
    const inorder = (node,res) =>{ 
        if(node) {
            inorder(node.left,res)
            res.push(node.val)
            inorder(node.right,res)
        }
    }

    inorder(root1,num1)
    inorder(root2,num2)

    const merge = []
    let p1 = 0,p2 = 0
    // 双指针开始循环
    while(true) {
        if(p1 === num1.length) {
            // 把num2剩余全部合并
            for(let i = p2;i<num2.length;i++) {
                merge.push(num2[i])
            }
            break
        }
        if(p2 === num2.length) {
            // 把num1剩余全部合并
            for(let i = p1;i<num1.length;i++) {
                merge.push(num1[i])
            }
            break
        }
        if (num1[p1] < num2[p2]){
            merge.push(num1[p1++])
        }else{
            merge.push(num2[p2++])
        }
    }
    return merge
};