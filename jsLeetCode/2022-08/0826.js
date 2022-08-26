// 1464 数组中两元素的最大乘积
// 给你一个整数数组nums，请你选择数组的两个不同下标i和j，使(nums[i]-1)*(nums[j]-1)取得最大值
// 计算返回式的最大值

/**
 * @param {number[]} nums
 * @return {number}
 */
// 64ms
// 41.2MB
// 一次遍历，维护最大和次大
var maxProduct = function (nums) {
  let maxNum = Math.max(nums[0],nums[1]);
  let secondMaxNum = Math.min(nums[0],nums[1]);
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] >= maxNum) {
      secondMaxNum = maxNum;
      maxNum = nums[i];
    } else if (nums[i] > secondMaxNum) {
        secondMaxNum = nums[i]
    }
  }
  return (maxNum-1)*(secondMaxNum-1)
};

console.log(maxProduct([3,7]))