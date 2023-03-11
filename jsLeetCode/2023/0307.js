// 剑指offer  47 礼物的最大价值
// 在一个 m*n的棋盘的每一格都放有一个礼物，每一个礼物都有一定的价值 （>0)。你可以从棋盘的左上角开始拿礼物
// 每次向右或者下移动一个，直到右下角。给定棋盘和礼物的价值，计算最多能拿多少价值的礼物

/**
 * @param {number[][]} grid
 * @return {number}
 */

// 从左上角开始构建一个最大价值数组，赋予初值
// 每次的数组等于 max【左侧，上侧】
var maxValue = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const maxGrid = new Array(m).fill(0).map(()=>new Array(n).fill(0));
  maxGrid[0][0] = grid[0][0]
  //初始化
  for(let i=1;i<m;i++){
    maxGrid[i][0] = maxGrid[i-1][0]+grid[i][0]
  }
  for(let i=1;i<n;i++){
    maxGrid[0][i] = maxGrid[0][i-1]+grid[0][i]
  }
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
        maxGrid[i][j] = Math.max(maxGrid[i-1][j]+grid[i][j],maxGrid[i][j-1]+grid[i][j])
    }
  }
  return maxGrid[m-1][n-1]
};

grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(maxValue(grid));
