// 1781 所有子字符串美丽值之和
// 定义为：出现频率最高的字符于出现频率最低的字符的出现次数之差
// 给定一个字符串，返回其所有子字符串的美丽值之和

/**
 * @param {string} s
 * @return {number}
 */
// 双层循环
var beautySum = function (s) {
  let ans = 0;
  let i = 0;
  for (let i = 0; i < s.length; i++) {
    const cnt = new Array(26).fill(0);
    let maxFreq = 0;
    for (let j = i; j < s.length; j++) {
      maxFreq = Math.max(maxFreq, ++ cnt[s[j].charCodeAt() - "a".charCodeAt()]);
      let minFreq = s.length
      for(let k=0;k<26;k++){
        if(cnt[k] > 0){
            minFreq = Math.min(minFreq,cnt[k])
        }
      }
      ans += maxFreq -minFreq
    }
  }
  return ans
};
