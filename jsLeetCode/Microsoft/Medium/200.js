// 岛屿数量
// 给你一个由 1 陆地 和 0 水 组成的二维网格，计算网格中岛屿的数量
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向相邻的陆地连接形成
// 可以将设该网格的四条边均被水包围

/**
 * @param {character[][]} grid
 * @return {number}
 */
// 遍历每个边，并且开始进行深度搜索，标记搜索过的区域
// 优化，遍历过就改为岛屿
var numIslands = function (grid) {
  const step = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const island = new Array(grid.length).fill(0).map(() => {
    return new Array(grid[0].length).fill(0);
  });
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1 && island[i][j] == 0) {
        dfs(island, grid, i, j, step);
        num += 1;
      }
    }
  }
  return num;
};

var dfs = function (island, grid, i, j, step) {
  if (grid[i][j] == 0 || island[i][j] == 1) {
    return;
  }
  island[i][j] = 1;
  for (stepItem of step) {
    if (
      0 <=  Number(i) + Number(stepItem[0]) && Number(i) + Number(stepItem[0])< island.length &&
      0 <= Number(j) + Number(stepItem[1]) && Number(j) + Number(stepItem[1])< island[0].length
    ) {
      dfs(
        island,
        grid,
        Number(i) + Number(stepItem[0]),
        Number(j) + Number(stepItem[1]),
        step
      );
    }
  }
};

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid));
