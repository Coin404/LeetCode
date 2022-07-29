// 417 太平洋大西洋水流问题
//  m * n 的矩形岛屿，与太平洋和大西洋相邻，太平洋处于大陆的左边界和上边界，大西洋处于大陆的有边界和下边界
//  岛被分割成一个由若干方形单元格组成的网络.给定一个m*n 的整数矩阵 heights , heights[r][c] 表示坐标 [r][c]
//  上单元格高于海平面的高度
//  如果相邻的单元格的高度小于或者等于当前单元格的高度,雨水可以直接向四方流向相邻单元格
//  水可以从海洋附近的单元格流入海洋

// 返回网格坐标result 的 2D列表 ,其中result[i] = result[ri,ci]表示雨水从单元格(ri,ci)流动


// 从边界往内搜索,搜索过程中记录每个单元格是否可以从太平洋反向到达以及是否可以从大西洋反向到达
// 反向上搜索结束之后,遍历每个网络,如果两个标志都可以,就添加至答案中
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// 用来进行四个方向的搜索位移
const dirs = [[-1,0],[1,0],[0,-1],[0,1]]

var pacificAtlantic = function(heights) {
    // 行
    m = heights.length
    // 列
    n = heights[0].length
    // 太平洋
    const pacific = new Array(m).fill(0).map(()=>new Array(n).fill(0))
    // 大西洋
    const atlantic = new Array(m).fill(0).map(()=>new Array(n).fill(0))

    const dfs = (row,col,ocean) => {
        // 如果访问过的话,直接返回
        if(ocean[row][col]) {
            return
        }
        // 访问过说明能访问到该海洋
        ocean[row][col] = true 
        // 没有访问过的话,访问四个方向
        for(const dir of dirs) {
            const newRow =  row + dir[0] , newCol = col + dir[1]
            if(newRow >= 0 && newRow < m && newCol >= 0 && newCol < n  && heights[newRow][newCol] >= heights[row][col])
            {
                dfs(newRow,newCol,ocean)
            }
        }
    }

    // 开始遍历四条边
    // 太平洋
    for(let i = 0; i < m ; i++) {
        dfs(i,0,pacific)
    }
    for(let i = 1; i < n ; i++) {
        dfs(0,i,pacific)
    }
    // 大西洋
    for(let i = 0; i < m; i++ ) {
        dfs(i,n-1,atlantic)
    }
    for(let i = 0; i < n-1; i++) {
        dfs(m-1,i,atlantic)
    }
    // console.log(atlantic)
    // console.log(pacific)
    const result = []
    for(let i = 0; i < m ; i++){
        for(let j = 0;j < n;j++) {
            // console.log(i,j)
            if(pacific[i][j] && atlantic[i][j]) {
                // 将坐标推入
                const cell = []
                cell.push(i);
                cell.push(j)
                result.push(cell)
            }
        }
    }
    return result
};


// 广度优先搜索
var pacificAtlantic1 = function(heights){
    const m = heights.length
    const n = heights[0].length
    const pacific = new Array(m).fill(0).map(()=>new Array(n).fill(0))
    const atlantic = new Array(m).fill(0).map(()=>new Array(n).fill(0))

    // 广度优先搜索
    const bfs = (row, col ,ocean) =>{
        if(ocean[row][col]){
            return
        }
        ocean[row][col] = true
        const queue = []
        queue.push([row,col])
        while(queue.length) {
            const cell = queue.shift()
            for(const dir of dirs){
                const newRow = cell[0] + dir[0], newCol = cell[1] + dir[1];
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && heights[newRow][newCol] >= heights[cell[0]][cell[1]] && !ocean[newRow][newCol]) {
                    ocean[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                }
            }
        }
    }
}


const he = [[2,1],[1,2]]
console.log(pacificAtlantic(he))