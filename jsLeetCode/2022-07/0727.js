// 592 分数加减运算
// 结果转为不可约分的分数，如果最终结果是一个正式，也需要转成分数

/**
 * @param {string} expression
 * @return {string}
 */

// - 换成 +-
// 按照 + 分割
var fractionAddition = function (expression) {
  let arr = expression.replace(/-/g, "+-").split("+");
    console.log(arr)
  let value = arr.reduce((total, cur, curIndex) => {
    if (!cur) {
      return total;
    }
    total = total.split("/");
    cur = cur.split("/");
    // 分子
    const molecular = total[0] * cur[1] + total[1] * cur[0];
    // 分母
    const denominator = total[1] * cur[1];
    total = molecular + "/" + denominator;
    return total;
  }, "0/1");
  // 分子
  const molecular = value.split("/")[0];
  // 分母
  const denominator = value.split("/")[1];
    console.log(value)
    console.log(molecular)
    console.log(denominator)
  if (molecular == 0) {
    return "0/1";
  }
  console.log(Math.abs(molecular))
  const r = fn(Math.abs(molecular), Math.abs(denominator));
  value = Math.abs(molecular) / r + "/" + Math.abs(denominator) / r;
  if ((molecular >0 && denominator < 0 )|| (molecular <0 && denominator > 0 )) {
    value = '-'+value
  }
  
console.log(value)
  return value;
};

// 计算最大公约数
function fn(m, n) {
    // console.log(m)
    // console.log(n)
  //取余数
  r = m % n;
  m = n;
  n = r;
    // 整除，直接返回 
  if (r == 0) {
    return m;
  } else {
    return fn(m, n);
  }
}
expression = "-1/2+1/2-1/10";
fractionAddition(expression);
