// 1624 两个相同字符之间的最长子字符串
// 给你一个字符串s，请你返回两个相同字符之间的最长子字符串的长度，计算长度时不含这两个字符串。

/**
 * @param {string} s
 * @return {number}
 */

// 60ms
// 42.4MB
// 求出字符第一次出现的索引以及最后一次出现的索引，一次算出最大值
var maxLengthBetweenEqualCharacters = function (s) {
  const firstIndex = new Array(26).fill(-1);
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    // 之前没有记录过，表示这是第一次遇到，进行记录
    if (firstIndex[s[i].charCodeAt() - "a".charCodeAt()] < 0) {
      firstIndex[s[i].charCodeAt() - "a".charCodeAt()] = i;
    } else {
      max = Math.max(
        max,
        i - firstIndex[s[i].charCodeAt() - "a".charCodeAt()] - 1
      );
    }
  }
  return max;
};
