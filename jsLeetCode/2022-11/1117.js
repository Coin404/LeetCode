// 792 匹配子序列的单词数
// 给定字符串s和字符串数组words，返回words[i]中时s的子序列的单词个数
// 字符串的子序列可以是从原始字符串中生成的新字符串，可以从中删除一些字符，而不改变其余自负的相对顺序

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

// 这怕是还有很大的优化空间
//  1784ms
// 55.8MB
var numMatchingSubseq = function (s, words) {
  let ans = 0;
  const arr = [];
  const exc = new Set();
  for (let i = 0; i < words.length; i++) {
    arr.push([words[i], 0]);
    exc.add(words[i][0]);
  }
  for (let i = 0; i < s.length; i++) {
    if (exc.has(s[i])) {
      // 有所期待的字母，开始更新数组
      const len = arr.length;
      for (let j = 0; j < len; j++) {
        const str = arr.shift();
        if (str[0][str[1]] == s[i]) {
          exc.delete(s[i]);
          str[1] += 1;
        }
        if (str[1] == str[0].length) {
          ans += 1;
        } else {
          arr.push(str);
        }
      }
      //   重新增加期待值
      for (let i = 0; i < arr.length; i++) {
        exc.add(arr[i][0][arr[i][1]]);
      }
    }
  }
  return ans;
};

const s = "abcde";
const words = ["a", "bb", "acd", "ace"];
console.log(numMatchingSubseq(s, words));
