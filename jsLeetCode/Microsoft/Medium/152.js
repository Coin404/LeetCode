// 152 乘积最大子数组
// 给你一个整数数组nums ，请你找出数组中乘积最大的非空连续子数组
// （该子数组中至少包含一个数字），并返回该子数组所对应的乘积
// 测试用例的答案是一个32-位 整数
// 子数组 是数组的连续子序列
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// 记录当前最大的正数和当前最小的负数
// 最大值 当前数本身 负数*最小负数  正数*最大正数
// 64ms
// 41.2MB
 var maxProduct = function(nums) {
    let maxF = nums[0]
    let minF = nums[0]
    let ans = nums[0]
    let len = nums.length
    for(let i = 1;i<len;i++){
        let mx = maxF,mn = minF
        maxF = Math.max( mx*nums[i] ,Math.max(nums[i],mn*nums[i]) )
        minF = Math.min( mn*nums[i] ,Math.min(nums[i],mx*nums[i]) )
        ans = Math.max(maxF,ans)
        console.log(maxF)
        console.log(ans)
    }
    return ans
};
console.log(maxProduct([2,3,-2,4]))