// 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中国呢找到目标值，并返回器索引
// 如果目标值不存在于数组中，返回他将会被按顺序插入的位置
// 请用时间复杂度 O（log n）的算法

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 只能是二分法搜索了
// 68ms
// 41.3MB
 var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length-1
    while(left <= right){
        const middle = Math.floor((left +right)/2)
        if(target <= nums[middle]){
            right = middle-1
        }else if( target > nums[middle]){
            left = middle+1
        }
    }
    return left
};