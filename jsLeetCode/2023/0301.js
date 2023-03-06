// 2373 矩阵中的局部最大值
// 给定一个大小为 n * n 的整数矩阵 grid
// 生成一个大小为 n-2 * n-2 的整数矩阵 maxLocal，满足
// maxLocal[i][j] 等于 grid 中以 i+1行和 j+1 列为中心的 3*3矩阵中的最大值
// 换句话就是找出每个 grid 3*3矩阵的最大值

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

// 总不能真的遍历九个格子吧
// 好像也没有啥优化
// 将行最大处理出来，其次处理列，时间复杂度一致
var largestLocal = function (grid) {
  const n = grid.length;
  const ans = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      // 遍历九宫格
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          ans[i][j] = Math.max(ans[i][j], grid[x][y]);
        }
      }
    }
  }
  return ans;
};

grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];
console.log(largestLocal(grid));
