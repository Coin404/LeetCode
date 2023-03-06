// 面试 05.02 二进制数转字符串
// 二进制数转字符串，给定一个介于 0 与 1 之间的实数，类型为 double
// 打印它的二进制表达式，如果该睡姿无法精确的用32位以内的二进制表示，打印ERROR
// 32位，包括 0. 这两位，题目保证小树位数最多六位

/**
 * @param {number} num
 * @return {string}
 */

// 输入最多为六位 ，处理六次
var printBin = function (num) {
  let ans = "0.";
  let count = 6;
  let base = 0.5;
  while (num != 0 && count > 0) {
    if (num - base >= 0) {
      ans += "1";
      num -= base;
      base /= 2;
    } else {
      ans += "0";
      base /= 2;
    }
    count--;
  }
  console.log(num)
  if (num != 0) {
    return "ERROR";
  }
  return ans;
};

console.log(printBin(0.015625));
