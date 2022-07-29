// 2049 统计最高分的节点数目
// 给定一个二叉树，根结点为0
// parent[i] 是节点 i 的父节点
// 一个子树的大小为这个字数内的节点数目，每一个节点都有一个与之相关的分数
// 这个节点的分数为，去除其自身后苏哦有的非空子树的大小的乘积
// 返回所有最高得分的数目

// 深度优先搜索，剩余部分最多为三颗非空字数
var countHighestScoreNodes = function(parents) {
    const n = parents.length
};