// 782 变为棋盘
// 一个n*n的二维网格board仅由0和1组成。每次移动，可以任意交换两列或是两行的位置
// 返回这个矩阵变为棋盘所需的最小移动次数，不存在输出-1
// 棋盘---任意一格的上下左右四个方向的值均与本身不同的矩阵

/**
 * @param {number[][]} board
 * @return {number}
 */
// 90ms
// 45.2MBß
var movesToChessboard = function (board) {
  let row = [];
  let col = [];
  const rowL = board.length;
  const colL = board[0].length;
  let colMap = new Map();
  let rowMap = new Map();
  let flag = 0;
  let countCol = 0;
  let countRow = 0;

  for (let i = 0; i < rowL; i++) {
    row.push(board[i].join(""));
  }
  for (let i = 0; i < rowL; i++) {
    let str = "";
    for (let j = 0; j < colL; j++) {
      str += board[j][i];
    }
    col.push(str);
  }
  const baseCol = parseInt(col[0], 2);
  const baseRow = parseInt(row[0], 2);
  // 此时col,row存储了当前位置的信息
  // 与第一行一致转为1，不一致转为0
  // 校验偶数位 0 2 4 6是不是都和1一致，几个不一致就变换几次
//   console.log(col);
//   console.log(row);
  col = col.map((v, index) => {
    colMap.set(parseInt(v, 2), colMap.get(parseInt(v, 2)) + 1 || 1);
    if ((parseInt(v, 2) ^ baseCol) == 0) {
      v = 1;
    } else if ((parseInt(turnTwo(v), 2) ^ baseCol) == 0) {
      v = 0;
    } else {
      flag = 1;
    }
    if ((index & 1) == 0 && v == 0) {
      countCol++;
    }
    return v;
  });
  row = row.map((v, index) => {
    rowMap.set(parseInt(v, 2), rowMap.get(parseInt(v, 2)) + 1 || 1);
    if ((parseInt(v, 2) ^ baseRow) == 0) {
      v = 1;
    } else if ((parseInt(turnTwo(v), 2) ^ baseRow) == 0) {
      v = 0;
    } else {
      flag = 1;
    }
    if ((index & 1) == 0 && v == 0) {
      countRow++;
    }
    return v;
  });
  if (flag) {
    // console.log('-')
    return -1;
  }
  //   只能出现两种，两者差值不大于1
  // console.log(col);
  // console.log(row);
  //   console.log(colMap);
  //   console.log(rowMap);
  //   console.log(countCol);
  if (
    colMap.size != 2 ||
    rowMap.size != 2 ||
    Math.abs(2 * colMap.get(baseCol) - colL) > 1 ||
    Math.abs(2 * rowMap.get(baseRow) - rowL) > 1
  ) {
    return -1;
  }
  //   偶数，找最小遍历
  if ((rowL & 1) == 0) {
    return (
      Math.min(Math.floor(colL / 2) - countCol, countCol) +
      Math.min(Math.floor(rowL / 2) - countRow, countRow)
    );
  } else {
    // 奇数，多的放在偶数位
    const C =
      2 * colMap.get(baseCol) < colL ? (colL + 1) / 2 - countCol : countCol;
    const R =
      2 * rowMap.get(baseRow) < rowL ? (rowL + 1) / 2 - countRow : countRow;
    return C + R;
  }
};

var turnTwo = function (str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    ans += str[i] == 0 ? 1 : 0;
  }
  return ans;
};
const a = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 0, 0],
];
console.log(movesToChessboard(a));