// 最大连续1的个数
// 给定一个二进制数组nums，计算其中最大连续1的个数

/**
 * @param {number[]} nums
 * @return {number}
 */


// 64ms
// 43.4MB
var findMaxConsecutiveOnes = function (nums) {
  let ans = 0;
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    if( nums[i] == 1){
        cur++
        ans = Math.max(cur,ans)
    } else{
        cur = 0
    }
  }
  return ans
};
