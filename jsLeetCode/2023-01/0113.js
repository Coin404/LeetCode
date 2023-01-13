// 2287 重排字符形成目标字符串
// 给你两个下标从0开始的字符串s和target。你可以从s中取出一些字符并将其重排，得到若干新的字符串
// 从s中取出字符并重新排列，返回可以形成targrt的最大副本数

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */

// 遍历一遍，记录targer的字母在s中出现的次数
var rearrangeCharacters = function (s, target) {
  let ans = s.length;
  const map = new Map();
  for (let i = 0; i < target.length; i++) {
    let cur = map.get(target[i]);
    if (cur) {
      map.set(target[i], [cur[0] + 1, 0]);
    } else {
      map.set(target[i], [1, 0]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let cur = map.get(s[i]);
    if (cur) {
      cur[1] += 1;
      map.set(s[i], cur);
    }
  }
  for (item of map.values()) {
    ans = Math.min(ans, Math.floor(item[1] / item[0]));
  }
  return ans
};
(s = "abbaccaddaeea"), (target = "aaaaa");
console.log(rearrangeCharacters(s, target));
