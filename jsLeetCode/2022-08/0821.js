// 检查单词是否为句中其他单词的前缀 1455
// 给你一个字符串sentence作为句子并指定检索词为searchWord,
// 其中句子是由若干用单个空格分隔的单词组成。请你检查检索词searchWord是否为句子sentence中任意单词的前缀
// 如果searchWord是某一个单词的前缀，则返回句子sentence中该单词所对应的下标，下标从1开始
// 如果有多个前缀，返回匹配的第一个单词的下标
// 不是任何单词的前缀，返回-1

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
// 68ms
// 40.9MB
// 暴力遍历
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= searchWord.length) {
    let flag = 1
      for (let j = 0; j < searchWord.length; j++) {
        if(searchWord[j] != words[i][j]){
            flag = 0
            break
        }
      }
      if(flag == 1){
        return i+1
      }
    }
  }
  return -1
};

(sentence = "i love eating burger"), (searchWord = "burg");
isPrefixOfWord(sentence, searchWord);
