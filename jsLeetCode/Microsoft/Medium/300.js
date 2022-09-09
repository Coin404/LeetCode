// 最长递增子序列
// 给你一个整数数组nums，找到其中最长严格递增子序列的长度
// 子序列是由原数组派生而来的序列，删除或不删除数组中的元素而不改变其余元素的顺序
// 如 3 ，6，2 ，2，7是数组的子序列

// 单调栈？ X
// 从左往右遍历
// 如果升序就加入，不升序就退栈
// 记录每次入栈的时候栈的长度
// 0 1 0 3 4 会触发逻辑错误

// 动态规划，维护一个以当前数字结尾的最大上升

// 贪心
// 从左往右，每次找最小的可插入，使得上升尽可能慢
// 维护数组d[i]表示长度为i的最长上升子序列的末尾元素的最小值
/**
 * @param {number[]} nums
 * @return {number}
 */
// 188ms
// 44.2MB
 var lengthOfLIS = function(nums) {
    // dp表示以当前结尾的最长上升子序列的长度
    const len = nums.length
    const dp = new Array(len).fill(0)
    let ans = 1
    dp[0] = 1
    for(let i = 1;i<len;i++){
        for(let j = 0;j<i;j++){
            // 如果能插入队尾
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[j]+1,  dp[i])     
            }
        }
        ans = Math.max(dp[i],ans)
    }
    return ans
};