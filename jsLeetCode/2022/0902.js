// 687 最长同值路径
// 给定一个二叉树的root，返回最长的路径的长度，这个路径中的每个节点具有相同值。
// 这条路径可以经过也可以不经过根节点

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 如何减枝？
// 自己点和自己是一样的值，直接过度到下一节点
// [1,null,1,1,1,1,1,1] 该示例过不去
// --->该数组对应的二叉树？
// --->模拟不出原二叉树
// --->找不到逻辑bug点
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var longestUnivaluePath = function (root) {
    if(!root){
    return 0
    }
    return defs(root,countRoute(root,0))
};

var defs = function(node,ans){
    let count = 0
    // 左节点存在且不等于根节点值
    if(node.left && node.left.val != node.val){
        // 没计算过，开始计算左节点的长度
        count = countRoute(node.left,0)
        if(count > ans){
            ans = count
        }
        defs(node.left,ans)
    }else if(node.left && node.left.val == node.val){
        // 计算过，直接到子节点
        defs(node.left,ans)
    }

    if(node.right && node.right.val != node.val){
        count = countRoute(node.right,0)
        if(count > ans){
            ans = count
        }
        defs(node.right,ans)
    }else if(node.right && node.right.val == node.val){
        defs(node.right,ans)
    }
    return ans
}

var countRoute = function (node, count) {
    const val = node.val;
    // 左节点存在，且左节点的值和根节点一致，记述+1
    if (node.left) {
        if (node.left.val == val) {
            count = countRoute(node.left, count+1);
        }
    }
    if (node.right) {
        if (node.right?.val == val) {
            count = countRoute(node.right, count+1);
        }
    }
    return count;
};