// 462 最少移动次数使数组元素相等
// 给你一个长度为n的整数数组nums,返回使所有数组元素相等需要的最少移动次数
// 在一步操作中,你可以使数组中的一个元素加1或者减1
/**
 * @param {number[]} nums
 * @return {number}
 */

// 平均数不是最优解,中位数最优解  56
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length,
        ret = 0,
        x = nums[Math.floor(n / 2)];
    for (let i = 0; i < n; i++) {
        ret += Math.abs(nums[i] - x);
    }
    return ret;
};



const a = [1, 0, 0, 8, 6]
console.log(minMoves2(a))