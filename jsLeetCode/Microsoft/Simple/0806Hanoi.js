// 汉诺塔问题
// 在经典汉诺塔问题中，有3根柱子及N个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。
// 一开始，所有盘子自上而下升序依次套在第一根柱子上（即每个盘子只能放在更大的盘子上面）
// 移动圆盘时受到以下限制：
// 1.每次只能移动一个盘子
// 2.盘子只能从柱子顶端滑出移到下一根柱子
// 3.盘子只能叠在比它大的盘子上
// 将所有盘子从第一根一道最后一根柱子

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
// 60ms
// 40.9MB
var hanota = function (A, B, C) {
  let n = A.length;
  move(A, B, C, n);
};

var move = function (A, B, C, n) {
  // 只有一个元素，A直接去C
  if (n == 1) {
    C.push(A.pop());
    return
  }
  // 借助C，将n-1个移到B
  move(A, C, B, n - 1);
  // 将A中最后一个推入C
  C.push(A.pop());
  // 讲B中n-1个移入C
  move(B, A, C,n - 1);
};

A = [2, 1, 0];
B = [];
C = [];
hanota(A, B, C);
console.log(C)
