// 1608 特殊矩阵的特征值
// 给定一个非负整数数组nums.如果存在一个数x，使得nums中恰好有x个元素大于等于x，那么就称nums是一个特殊数组
// 而x是该数组的特征值
// x不必是nums中的元素
// 如果是特殊数组，返回特征值x

/**
 * @param {number[]} nums
 * @return {number}
 */
// 60ms
// 41.1MB
 var specialArray = function(nums) {
    const n = nums.length
    // 倒序排序
    nums = nums.sort((a,b)=>(b-a))
    for (let i = 1; i <= n; ++i) {
        // 保证当前项大于i,并且下一位小于i,确定唯一性
        if (nums[i - 1] >= i && (i === n || nums[i] < i)) {
            return i;
        }
    }
    return -1;
};