// 1470 重新排列数组
// 给你一个数组nums,数组中有2n个元素，按【x1,x2,....,xn,y1,y2....yn】格式排列
// 请你按照 [x1,y1,x2,y2,x3,y3...]

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// 56ms
// 43.1MB
var shuffle = function (nums, n) {
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }
  return ans
};
