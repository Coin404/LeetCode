// 1417 重新格式化字符串
// 给你一个混合了数字和字母的字符串s，其中的字母均为小写英文字母
// 请你将该字符串重新格式化，使得相邻两个字符的类型都不同，也就是说字母后面跟着数字，数字后面跟着字母
// 如果没有办法格式化，返回一个空字符串

/**
 * @param {string} s
 * @return {string}
 */

// 两次遍历
// 第一次 分配  筛选出数字和字母，第二次合并
// 68ms
// 45,1MB
var reformat = function (s) {
  const len = s.length;
  const newS = [];
  const newNum = [];
  let ans = "";
  for (let i = 0; i < len; i++) {
    // 收集数字
    if (!isNaN(Number(s[i]))) {
      newNum.push(s[i]);
    } else {
      newS.unshift(s[i]);
    }
  }
  if (Math.abs(newNum.length - newS.length) > 1) {
    return "";
  } else {
    // 多的排在偶数位置
    let i = 0;
    let j = 0;
    let k = 0;
    if (newNum.length > newS.length) {
      for (i; i < len; i++) {
        if (i % 2 == 0) {
          ans += newNum[k++];
        } else {
          ans += newS[j++];
        }
      }
    } else {
      for (i; i < len; i++) {
        if (i % 2 == 0) {
          ans += newS[k++];
        } else {
          ans += newNum[j++];
        }
      }
    }
  }
  return ans;
};
