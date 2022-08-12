// 84ms
// 44.2MB
// 原地修改原数组，遍历过改完海洋
var numIslands = function (grid) {
    const step = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];
    let num = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          dfs(grid, i, j, step);
          num += 1;
        }
      }
    }
    return num;
  };


var dfs = function ( grid, i, j, step) {
    if (grid[i][j] == 0) {
      return;
    }
    grid[i][j] = 0
    for (stepItem of step) {
      if (
        0 <=  Number(i) + Number(stepItem[0]) && Number(i) + Number(stepItem[0])< grid.length &&
        0 <= Number(j) + Number(stepItem[1]) && Number(j) + Number(stepItem[1])< grid[0].length
      ) {
        dfs(
          grid,
          Number(i) + Number(stepItem[0]),
          Number(j) + Number(stepItem[1]),
          step
        );
      }
    }
  };