// 2180 统计各位数字之和为偶数的整数个数
// 给你一个正整数num,请你统计并返回小于或等于num且各位数字之和为偶数的正整数数目
// 正整数的各位数字之和是其所有位上的对应数字相加的结果

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  // 每十都是五个
  let sum = 0;
  const one = num % 10;
  const ones = Math.floor(num / 10);
  if (num > 10) {
    sum = ones * 5 - 1;
  }
  let cur = 0;
  const arr = String(ones).split("");
  for (let i = 0; i < arr.length; i++) {
    cur += arr[i];
  }
  if (cur % 2 == 0) {
    // 计算偶数的个数
    sum += Math.floor(one / 2);
    if (cur != 0) {
      sum += 1;
    }
  } else {
    // 计算奇数的个数
    sum += Math.floor((one + 1) / 2);
  }
  return sum;
};

console.log(countEven(26));
