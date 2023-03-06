// 713 乘积小于K的子数组
// 给定一个整数数组和一个整数K,返回子数组内所有元素的乘积严格小于K的连续子数组数目

// 滑动窗口，从左往右，一直乘，小于count加一，大于就左边的边界向右滑动

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 1236ms
 var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0,right = 1
    let count = 0
    for(left;left < nums.length ; left++) {
        let num = nums[left]
        // console.log('+++')
        if(num < k) {
            ++count
            // console.log(count)
            for(right = left+1;right<nums.length;right++){
                num *= nums[right]
                if(num < k){
                    ++count
                    // console.log('---')
                    // console.log(count)
                } else{
                    break
                }
            }
        }
    }
    return count
};
let nums = [1, 1, 1]
let k = 2

console.log(numSubarrayProductLessThanK(nums, k))

// 官解   72ms
// 反向枚举
// 左端点越大，子数组乘积越小
// 每枚举一个右端点，就开始缩小左端点，知道满足当前乘积<k或者i>j
var numSubarrayProductLessThanK = function(nums, k) {
    let n = nums.length, ret = 0;
    let prod = 1, i = 0;
    for (let j = 0; j < n; j++) {
        prod *= nums[j];
        while (i <= j && prod >= k) {
            prod /= nums[i];
            i++;
        }
        ret += j - i + 1;
    }
    return ret;
};
