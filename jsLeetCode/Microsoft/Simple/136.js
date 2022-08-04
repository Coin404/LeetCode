// 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余元素均出现两次。
// 找出那个只出现了一次的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 异或来筛选数据
// 64ms
// 42.3MB
 var singleNumber = function(nums) {
    let ans = 0
    for(let i = 0;i< nums.length;i++){
        ans ^= nums[i]
    }
    return ans
};