// 593 有效的正方形
// 给定2D空间中四个点的坐标p1,p2,p3,p4，如果这四个点构成一个正方形，返回true

// 四边距离相等 y,x平方和
// 直角 -> 坐标乘积为0

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  // 需要区分相邻点
  const data = [p1, p2, p3, p4];
  const route = [];
  let dLength = new Set();
  // 得到点信息以及距离信息
  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 4; j++) {
      const info = {};
      info.x1 = i;
      info.x2 = j;
      const dx = data[i][0] - data[j][0];
      const dy = data[i][1] - data[j][1];
      info.d = dx * dx + dy * dy;
      dLength.add(info.d);
      route.push(info);
    }
  }
  let arr = Array.from(dLength);
  // 对角线大于边
  let min = Math.min.apply(Math, arr);
  let nearPoint = [];
  for (let i = 0; i < route.length; i++) {
    if (min == route[i].d) {
      // 两边相邻
      nearPoint.push(route[i]);
    }
  }
  // 四边不等，返回false，此时已经是棱形，只需要一个角九十度
  if (nearPoint.length != 4) {
    return false;
  }

//   data[nearPoint[0].x1][0] 点1  data[nearPoint[0].x2][0] 点2  坐标公式
  const angle =
    (data[nearPoint[0].x1][0] - data[nearPoint[0].x2][0]) * (data[nearPoint[0].x1][1] - data[nearPoint[0].x2][1]) + 
    (data[nearPoint[1].x1][0] - data[nearPoint[1].x2][0]) * (data[nearPoint[1].x1][1] - data[nearPoint[1].x2][1]) 

  if (angle != 0) {
    return false;
  }
  return true;
};
(p1 = [0, 0]), (p2 = [1, 1]), (p3 = [1, 0]), (p4 = [0, 1]);
validSquare(p1, p2, p3, p4);
