// 1422 分割字符串的最大得分
// 给定一个由若干0和1组成的字符串s，请你计算并返回将该字符串分割成两个非空子字符串，所能得到的最大得分
// 字符串的得分为左子字符串中0的数量加上右子字符串中的1的数量

// 直接遍历呗，从左往右记录0的数量，从右往左记录1的数量
// 取最大值

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let zeroCount = 0;
  let oneCount = 0;
  const sArr = new Array(s.length-1).fill(0);
  for (let i = 0; i < s.length-1; i++) {
    if (s[i] == 0) {
      ++zeroCount;
    }
    sArr[i] += zeroCount;
    if (s[s.length - 1 - i] == 1) {
      ++oneCount;
    }
    sArr[s.length - 2 - i] += oneCount;
    console.log(sArr);
  }
  return Math.max.apply(null, sArr);
};

s = "011101";
console.log(maxScore("1111"));
