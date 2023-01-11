// 2283 判断一个数的数字计数是否等于数位的值
// 给你一个下标从0开始长度为n的字符串num
// 对于每个 0 <= i < n的下标i 都满足数位 i 在num中出现了num[i]次，那么请你返回true

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const arr = [...num.split("")];
  num.split("").map((v, index) => {
    arr[v]--;
  });
  for (let i = 0; i < arr.length; i++) {
    if (0 != Number(arr[i])) {
      return false;
    }
  }
  return true;
};

num = "1210";
console.log(digitCount(num));
