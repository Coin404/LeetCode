// 摆动排序 2  324
// 给你一个整数数组Nums,将它重新排列成nums[0] < nums[1] > nums[2] <nums[3] ..
// 假设所有输入数组都可以得到题目满足的需求
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 请自行查看解析，看不懂！
 var wiggleSort = function(nums) {
    const arr = nums.slice();
    arr.sort((a, b) => a - b);
    const n = nums.length;
    const x = Math.floor((n + 1) / 2);
    for (let i = 0, j = x - 1, k = n - 1; i < n; i += 2, j--, k--) {
        nums[i] = arr[j];
        if (i + 1 < n) {
            nums[i + 1] = arr[k];
        }
    }
};

const num = [1,5,1,1,6,4]
wiggleSort(num)
console.log(num)