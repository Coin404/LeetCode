// 1605 给定行和列的和求可行矩阵
// 给定两个非负整数数组 rowSum 和 colSum ， rolSum 是二维矩阵中第 i 行元素的和
// colSum[i] 是第 j 列元素的和
// 请找到大小为 rowSum.length * colSum.length 的任意非负整数矩阵，满足要求，题目至少存在一个可行矩阵
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
// 逐行放置，如果列够，就全放，不够就放置当前列允许的最大容量
// 向后继续

// 可行，但是效率极其低下  328ms
var restoreMatrix = function (rowSum, colSum) {
  const rowLength = rowSum.length;
  const colLength = colSum.length;
  const matrix = new Array(rowLength).fill(0).map(() => {
    return new Array(colLength).fill(0);
  });
  for (let i = 0; i < rowLength; i++) {
    let curNumber = rowSum[i];
    for (let j = 0; j < colLength; j++) {
        // console.log(curNumber,colSum[j])
      // 小于列和，直接全部放置
      if (curNumber <= colSum[j]) {
        matrix[i][j] = curNumber;
        colSum[j] -= curNumber;
        break;
      } else {
        // 放置最大可放置
        matrix[i][j] = colSum[j];
        curNumber -= colSum[j];
        colSum[j] = 0;
      }
    }
  }
  return matrix;
};
(rowSum = [14, 9]), (colSum = [6, 9, 8]);
console.log(restoreMatrix(rowSum, colSum));
