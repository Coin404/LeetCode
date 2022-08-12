// 无重复字符的最长字串
// 给定一个字符串s，请你找出其中不含有重复字符的最长字串的长度
/**
 * @param {string} s
 * @return {number}
 */

// 滑动窗口，用一个set记录当前窗口内的值
// 控制窗口每次变化都是，内部的值不重复
// 记录最大的滑动窗口

// 76ms
// 45，7MB
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let ans = 0;
  let len = 0;
  const Window = new Set();
  while (right < s.length) {

    while (Window.has(s[right])) {
      Window.delete(s[left]);
      left++;
      len--;
    }
    Window.add(s[right]);
    len++;
    ans = Math.max(len, ans);
    right++;
  }
  return ans;
};

str = "abcabcbb";
console.log(lengthOfLongestSubstring(str))