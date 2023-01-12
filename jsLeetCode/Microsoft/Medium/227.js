// 基本计算器 II
// 给你一个字符串表达式s,请你实现一个基本计算器来计算并返回它的值
// 整数除法仅仅保留整数部分
// 可以假定给的表达式的值都是有效的，不允许使用任何字符串作为数学表达式的内置函数
/**
 * @param {string} s
 * @return {number}
 */

// 栈
var calculate = function (s) {
  const stack = [];
  s = s.trim();
  let preSign = "+";
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i])) && s[i] != " ") {
      num = num * 10 + Number(s[i]);
    }
    if (isNaN(Number(s[i])) || i == s.length - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        default:
          let n = stack.pop();
          if (n > 0) {
            stack.push(Math.floor(n / num));
          } else {
            stack.push(Math.ceil(n / num));
          }
      }
      preSign = s[i];
      num = 0;
    }
  }
  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }
  return ans;
};

s = "14-3/2";
console.log(calculate(s));
