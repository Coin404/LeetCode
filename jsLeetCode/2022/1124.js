// 795 区间子数组个数
// 给你一个整数数组nums 和 两个整数： left 和 right
// 找出nums中连续非空且其中最大元素在范围[left , right]内的子数组，并返回满足条件的子数组个数

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

// < left  0 表示
//        合格 1表示
// > right 2表示
// 求至少一个1，无2的数组
// 求 1，0的数组 减去 只有0的数组
 
var numSubarrayBoundedMax = function(nums, left, right) {
    return count(nums, right) - count(nums, left - 1);
}

const count = (nums, lower) => {
    let res = 0, cur = 0;
    for (const x of nums) {
        cur = x <= lower ? cur + 1 : 0;
        res += cur;
    }
    return res;
};  

nums = [2,1,4,3];
left = 2;
right = 3;

console.log(numSubarrayBoundedMax(nums, left, right));
