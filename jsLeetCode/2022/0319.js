// 根据二叉树简历字符串
// 606

// 采用前序遍历的方式,将一个二叉树转换成一个由括号和整数组成的字符串
// 空节点用一对空括号()表示,需要省略所有不影响字符串与原始二叉树之间一对一映射关系的空括号对

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 // @param {TreeNode} root
 // @return {string}
 */
// 递归调用
 var tree2str = function(root) {
    //  空节点,返回空
    if( !root ) {
        return "";
    }
    // 子节点为空,返回根节点,
    if( !root.left && !root.right ) {
        return ''+root.val
    }
    // 如果没有右孩子,只加入左孩子
    if( !root.right ) {
        return root.val + '(' + tree2str(root.left) +')'
    }
    // 左右孩子都有
    return  root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')'
};

// 迭代法  用栈迭代
var tree2str2 = function(root) {
    let ans = '';
    // 建立一个栈
    const st = [root];
    // 判断是否已经遍历过了
    const vis = new Set();
    // 遍历站
    while (st.length) {
        // 相当于出栈
        const node = st[st.length - 1];
        // 如果已经遍历过
        if (vis.has(node)) {
            // 如果不是根节点,加上括号,根节点直接出栈
            if (node !== root) {
                ans += ')';
            }
            st.pop();
        } else {
            // 增加进去去重数组
            vis.add(node);
            // 非根节点,需要加入左括号和自己
            if (node !== root) {
                ans += '(';
            }
            ans += '' + node.val;
            // 如果没有左节点但是有右节点,加入()
            if (!node.left && node.right) {
                ans += '()';
            }
            // 右节点入栈,左节点入栈
            if (node.right) {
                st.push(node.right);
            }
            if (node.left) {
                st.push(node.left);
            }
        }
    }
    return ans;
};
