// 779 第K个语法符号
// 构建了一个包含n行（索引从1开始）的表。首先在第一行写上0，接下来每一行将前一行的0替换为01
// 1替换为10
// 给定行数n和序数k，返回第n行中的第k个字符

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 从第二次开始规律为
// 相反复制
// 所以每一行的数字都对应上一行的翻转数字
var kthGrammar = function (n, k) {
  if (k == 1) {
    return 0;
  }
  if (k > 1 << (n - 2)) {
    return 1 ^ kthGrammar(n - 1, k - (1 << (n - 2)));
  }
  return kthGrammar(n - 1, k);
};

// 在「方法二」的基础上，我们来进行优化，本质上我们其实只需要求在过程中的“翻转”总次数，
// 如果“翻转”为偶数次则原问题求解为 0，否则为 1。

// 奇位置永远与上一行对应的数字不同
var kthGrammar2 = function(n, k) {
    k--;
    let res = 0;
    while (k > 0) {
        k &= (k - 1);
        res ^= 1;
    }
    return res;
};

console.log(kthGrammar2(30, 8));
