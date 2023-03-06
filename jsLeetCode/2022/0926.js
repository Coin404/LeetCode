// 面试题17.19 消失的两个数字
// 给定一个数组，包含从1到N所有的整数，但是缺少了两个数字，能在O（N）时间内用O（1）找到他们

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 56ms
// 45.1MB
 var missingTwo = function(nums) {
    const n = nums.length
    let numN = 0
    let doubleN = 0
    let curnumN = 0
    let curdoubleN = 0
    const ans= []
    for(let i = 1 ;i <= n+2;i++){
        numN+=i
        doubleN +=(i * i)
    }
    for(let i = 0; i < n ;i++){
        curnumN += nums[i]
        curdoubleN += (nums[i] * nums[i])
    }
    let plus = numN - curnumN
    let doublePlus = (plus*plus -(doubleN - curdoubleN)) /2
    console.log(plus)
    console.log(doublePlus)
    return [ (plus + Math.sqrt((plus)*plus - 4*doublePlus))/2,plus-(plus + Math.sqrt((plus)*plus - 4*doublePlus))/2]
};