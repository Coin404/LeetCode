// 1704 判断字符串的两半是否相似
// 给你一个偶数长度的字符串s.将其拆分成长度相同的两半，前一半为a，后一半为b.
// 两个字符串相似的前提是它们都有相同数目的元音
// （'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）
/**
 * @param {string} s
 * @return {boolean}
 */

// 60ms
// 41.7MB
var halvesAreAlike = function (s) {
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let i = 0;
  let j = s.length-1;
  ans = 0;
  while (i < j) {
    if (arr.indexOf(s[i++]) != -1) {
      ans+=1;
    }
    if (arr.indexOf(s[j--]) != -1) {
      ans-=1;
    }
  }
  return ans == 0 ? true : false;
};

console.log(halvesAreAlike("book"));
