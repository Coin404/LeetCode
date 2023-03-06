// 1619 删除某些元素后的数组均值
// 给定一个整数数组arr，请删除最小 5% 的数字和最大5% 的数子，剩余数字的平均值


/**
 * @param {number[]} arr
 * @return {number}
 */

// 排序，只考虑中间90%的数字
// 排序时间复杂度+遍历一次
// 60ms
// 41.5MB
 var trimMean = function(arr) {
    arr.sort((a,b)=>(a-b))
    const n = arr.length
    let sum = 0
    for(let i = n/20;i< 19*n/20;i++){
        sum+=arr[i]
    }
    return sum / (n * 0.9)
};