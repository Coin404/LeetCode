// 求解方程 640
// 求解一个给定的方程，将x以字符串 x =# value 的形式返回
// 该方程仅包含 + - 操作，变量x 和其对应系数
// 如果无解 返回 “No slution”
// 无限解 返回 “Infinite solutions”
// 如果值有一个解，保证返回值是一个整数

/**
 * @param {string} equation
 * @return {string}
 */

// 64ms
// 41,1MB
var solveEquation = function (equation) {
  const arr = equation.replace(/-/g, "+-").split("=");
  const left = arr[0].split("+");
  const right = arr[1].split("+");
  const equationSlo = {
    num: 0,
    x: 0,
  };
  for (let i = 0; i < left.length; i++) {
    if (!isNaN(Number(left[i]))) {
      equationSlo.num -= Number(left[i]);
    } else if (left[i] == "x") {
      equationSlo.x += 1;
    } else if (left[i] == "-x") {
      equationSlo.x += -1;
    } else {
      equationSlo.x += Number(left[i].replace("x", ""));
    }
  }
  for (let i = 0; i < right.length; i++) {
    if (!isNaN(Number(right[i]))) {
      equationSlo.num += Number(right[i]);
    } else if (right[i] == "x") {
      equationSlo.x -= 1;
    } else if (right[i] == "-x") {
      equationSlo.x -= -1;
    } else {
      equationSlo.x -= Number(right[i].replace("x", ""));
    }
  }
  console.log(equationSlo);
  if (equationSlo.x == 0 && equationSlo.num != 0) {
    return "No solution";
  }
  if (equationSlo.num == 0 && equationSlo.x == 0) {
    return "Infinite solutions";
  }
  return "x=" + Math.floor(equationSlo.num / equationSlo.x);
};

equation = "-x=-1";
solveEquation(equation);
