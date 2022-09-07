// 46 全排列
// 给定一个不含重复数字的数组nums，返回其所有可能的全排列，可以以仁义顺序返回答案

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 经典回溯算法
// 左边表示填过的数
// 右边表示未填入的数字
// 64ms
// 44.1MB
 var permute = function(nums) {
    const ans = []
    const len = nums.length
    let curLen = 0
    backTrack(len,curLen,ans,nums)
    return ans
};

const backTrack = function(len,curLen,ans,nums){
    if(len == curLen){
        ans.push([...nums])
    }
    for(let i = curLen;i<len;++i){
        // 动态维护数组
        swap(curLen,i,nums)
        // 继续填下一个数
        backTrack(len,curLen+1,ans,nums)
        // 撤销操作
        swap(curLen,i,nums)
    }
}

const swap = function(i,j,nums){
    const temp = nums[j]
    nums[j] = nums[i]
    nums[i] =temp
}

nums = [1,2,3]
console.log(permute(nums))