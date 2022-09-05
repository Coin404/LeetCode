// 652 寻找重复的子树
// 给定一颗二叉树的root，返回所有重复的子树
// 如果两颗树具有相同的结构和相同的结点，则它们是重复的

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
// 哈希表存储中序遍历
// 三元组表示一颗子树，根节点值，左子树序号，右子树序号
// 返回当前节点

// 116ms
// 48.6MB
var findDuplicateSubtrees = function(root) {
    const seen = new Map();
    const repeat = new Set();
    const dfs = (node)=>{
        if(!node){
            return ""
        }
        let sb = ''
        sb += node.val
        sb += "("
        sb += dfs(node.left)
        sb += ")("
        sb += dfs(node.right)
        sb += ")"
        if(seen.has(sb)){
            repeat.add(seen.get(sb))
        }else{
            seen.set(sb,node)
        }
        return sb
    }
    dfs(root)
    return [...repeat]
};


// 84ms
// 48.2MB
var findDuplicateSubtrees2 = function(root) {
    const seen = new Map();
    const repeat = new Set();
    let index = 0
    const dfs = (node)=>{
        if(!node){
            return 0
        }
        // 用三元组来标识节点
        const three = [node.val,dfs(node.left),dfs(node.right)]
        const hash = three.toString()
        if(seen.has(hash)){
            const pair = seen.get(hash)
            repeat.add(pair[0])
            // 因为是重复的树，所以返回的序号不变
            return pair[1]
        }else {
            seen .set(hash,[node,++index])
            return index
        }
    }
    dfs(root)
    return [...repeat]
};