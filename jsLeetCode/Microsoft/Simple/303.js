// 区域和尖措 - 数组不可变
// 给定一个整数数组 nums 处理以下类型的多个查询：
// 1.计算索引 left 和 right 包含边界的 nums 元素和
// 实现 NumArray类：

/**
 * @param {number[]} nums
 */
// 记录该位置之前未知的和
// 104ms
// 47.7MB
 var NumArray = function(nums) {
    const n = nums.length
    this.sums = new Array(n).fill(0)
    for(let i = 0;i < n; i++){
        this.sums[i+1] = this.sums[i]+nums[i]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right+1]- this.sums[left]
};