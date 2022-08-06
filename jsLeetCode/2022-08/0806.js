// 数组中的字符串匹配 1408
// 给定一个字符串数组 words 数组中的每个字符串都可以看作是一个单词，请按任意顺序染回words中是其他单词的子字符串的所有单词

/**
 * @param {string[]} words
 * @return {string[]}
 */

// 双循环比较？
// 手写KMP？

// 直接调用js内置函数search
// 72ms
// 43.4Mb
var stringMatching = function (words) {
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i != j && words[j].search(words[i]) != -1) {
        ans.push(words[i]);
        break;
      }
    }
  }
  return ans;
};

// kmp
// 其实就是模式串后面的与前一位next后一位进行比较
// 相同，说明可以继承前面的公共前后缀
// 不相同，说明当前位置匹配失败，往前回溯直至匹配成功
// 一直回溯到-1，就没有必要回溯了，直接从0开始匹配
// k可以当作门牌，每次和k指向的值比较，相等就+1，不能就继续查门牌k
var kmpArr = function (str) {
  const len = str.length;
  const next = new Array(len).fill(-1);
  let i = 0;
  let k = -1;
    while(i < len ){
        if(k == -1 || str[i] == str[k]){
            next[++i] = ++k
        }else if(str[k] == str[next[k]]){
            // 如果门牌指向的和当前一致，就没必要继续跳转了
            k = next[next[k]]
        }else{
            k=next[k]
        }
    }
    console.log(next)
};

kmpArr("aaaaaba");
