//  427 建立四叉树
// 给定一个 n*n 的矩阵grid，矩阵由若干0和1组成。请你用四叉树表示该矩阵grid
// 需要返回能表示矩阵的四叉树的根节点
//  isLeaf为false时，可以把true或者false赋值给节点，两种值都会接受
// 四叉树数据结构中,每个内部节点只有四个子节点,每个节点都有两个属性
// val:存储叶子节点所代表的区域的值.
// isLeaf:当这个节点是叶子结点的时候为true,如果他有四个子节点为false

// class Node {
//     public boolean val;
//     public boolean isLeaf;
//     public Node topLeft;
//     public Node topRight;
//     public Node bottomLeft;
//     public Node bottomRight;
// }

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */

// 思路:每次新建一个节点,矩阵切割为四块,如果全相等就给val,挂在节点上
//  不相等就进去循环挂载节点
 var construct = function(grid) {
    return dfs(grid,0,0,grid.length,grid.length)
};

const dfs = (grid,rowS,colS,rowE,colE) => {
    let same = true
    for(let i = rowS; i <rowE; i ++) {
        for(let j = colS; j < colE;j++) {
            if(grid[i][j] != grid[rowS][colS]){
                same = false
                break
            }
        }
    }
    if(same) {
        return new Node(grid[rowS][colS]==1,true)
    }
    // 如果不是叶子节点说明他有下级节点,继续递归调用
    // 切分四个部分
    const ret = new Node(
        true,
        false,
        dfs(grid, rowS, colS, Math.floor((rowS + rowE) / 2), Math.floor((colS + colE) / 2)),
        dfs(grid, rowS, Math.floor((colS + colE) / 2), Math.floor((rowS + rowE) / 2), colE),
        dfs(grid, Math.floor((rowS + rowE) / 2), colS, rowE, Math.floor((colS + colE) / 2)),
        dfs(grid, Math.floor((rowS + rowE) / 2), Math.floor((colS + colE) / 2), rowE, colE)
    );
    return ret;
}