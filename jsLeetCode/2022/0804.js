// 1403 非递增顺序的最小子序列
// 给定一个数组Nums ,请你从中抽取一个子序列，满足该子序列的元素之和严格大于未包含在该子序列中的元素之和
// 如果存在多个解决方案，只需返回长度最小的子序列，如果仍然有多个，返回元素之和的最大子序列
// 返回结果按照非递增排序

// 排序，从后往前拿数字
// 80ms
// 43.6MB
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    // eval 会执行参数 如果是表达式，执行表达式，是js语句执行js语句
    let sum = eval(nums.join("+"))
    let ans = []
    let ans_sum = 0
    let len = nums.length

    nums = nums.sort((a,b)=>{
        return b-a
    })

    for(let i = 0; i<nums.length;i++){
        ans_sum+=nums[i]
        ans.push(nums[i])
        if(ans_sum > sum / 2){
           return ans
        }
    }
};

nums = [4,3,10,9,8]
minSubsequence(nums)