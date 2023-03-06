// 670 最大交换
// 给定一个非负整数，你至多可以交换一次数字中的任意两位，返回你能得到的最大值

/**
 * @param {number} num
 * @return {number}
 */
// 56ms
// 41.4MB
var maximumSwap = function (num) {
  num = String(num).split("");
  const len = num.length;
  for (let i = 0; i < len-1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < len; j++) {
        // 比当前的大  或者 后方出现一个和当前最大值一样的值，取后方的值
      if (num[j] > num[maxIndex] || (num[j] == num[maxIndex] && maxIndex!=i)
      ) {
        maxIndex = j;
      }
    }
    if (maxIndex != i) {
        console.log(i)
        const temp = num[maxIndex];
        num[maxIndex] = num[i];
        num[i] = temp;
        return Number(num.join(""));
      }
  }
  return Number(num.join(""));
};

num = 98368;
console.log(maximumSwap(num));
