// 数组中的重复数据
// 给你一个长度为n的整数数组nums，其中nums的所有整数都在范围[1,n]内，且每个整数出现
// 一次或者两次，请你找出所有出现两次的数据，并且以数组形式返回
// 设计一个时间复杂度为o(n)且仅仅使用常量额外空间的算法解决

// 原地哈希，直接把数组位置作为哈希索引
var findDuplicates = function(nums) {
    const swap = (nums, index1, index2) => {
        const temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    };

    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        while (nums[i] != nums[nums[i] - 1]) {
            swap(nums, i, nums[i] - 1);
        }
    }
    const ans = [];
    
    for (let i = 0; i < n; ++i) {
        if (nums[i] - 1 !== i) {
            ans.push(nums[i]);
        }
    }
    return ans;
}
