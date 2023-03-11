// 1590 使数组和能被 P 整除
// 给你一个正整数数组 nums ,请你移除最短子数组，使得剩余元素和能被p整除
// 不允许把整个数组都移除，不行则返回 -1
// 子数组定义为原数组中连续的一组元素

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */

// 求出前缀和
// 连续数字的和可以通过前缀和求出
var minSubarray = function (nums, p) {
  const n = nums.length;
  const sumArray = new Array(n).fill(0);
  sumArray[0] = nums[0];
  for (let i = 1; i < n; i++) {
    sumArray[i] = sumArray[i - 1] + nums[i];
  }
  if (sumArray[n - 1] % p == 0) {
    return 0;
  }
  let count = 1;
  while (count < n) {
    for (let i = n - 1; i >= count; i--) {
      if ((sumArray[n - 1] - sumArray[i] + sumArray[i - count]) % p == 0) {
        return count;
      }
    }
    if ((sumArray[n - 1] - sumArray[count - 1]) % p == 0) {
      return count;
    }
    count++;
  }
  if (count == n) {
    return -1;
  } else {
    return count;
  }
};

nums = [8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2];
p = 148;
console.log(minSubarray(nums, p));
