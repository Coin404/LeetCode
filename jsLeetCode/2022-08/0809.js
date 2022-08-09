//逐步求和得到正数的最小值
// 给定一个整数数组nums。你可以选定任意的正数startValue作为初始值。
// 你需啊哟从左到右遍历nums数组，并将startValue依次累加上nums数组中的值。
// 请你确保累加和始终大于等于1的前提下选出一个最小的正数作为startValue

/**
 * @param {number[]} nums
 * @return {number}
 */

// 从左往右找到最小的负数累加和 答案为 1-（该值）  如果该值>1，返回1
// 60ms
// 40.9MB
var minStartValue = function(nums) {
    let minSum = nums[0]
    let sum = 0
    for(let i = 0 ; i< nums.length ; i++){
        sum+=nums[i]
        minSum = Math.min(sum,minSum)
    }
    return minSum >= 1? 1 : 1-minSum
};