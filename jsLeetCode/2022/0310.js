// n叉树的前序遍历
// n叉树在输入中按层序遍历进行序列化表示，每组子节点按null分隔
// function Node(bal,children) {
//     this.val = val
//     this.children = children
// }


//递归
var preorder = function(root) {
    const res = []
    helper(root,res)
    return res
};

function helper(root,res) {
    if(root == null) {
        return 
    }
    res.push(root.val)
    for (const ch of root.children) {
        helper(ch, res);
    }
}

// 迭代 每次将当前节点出栈输出，并且将孩子节点从右往左压入栈中
function preorder1(root) {
    const res =[]
    if(root == null ) {
        return res
    }

    const stack = []
    stack.push(root)
    while(stack.length) {
        const node = stack.pop()
        res.push(node.val)
        for(let i = node.children.length-1;i>=0;--i) {
            stack.push(node.children)
        }
    }
    return res
}