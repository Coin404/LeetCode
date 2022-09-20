// 698 划分为k个相等的子集
// 给定一个整数数组nums和一个正整数k ,找出是否有可能把这个数组分成k个非空子集，其总和都相等

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 求和，得到每一个桶装的数字和
 var canPartitionKSubsets = function(nums, k) {
    const max = eval(nums.join('+'))
    const target = max / k
    if(target % 1 != 0){
        console.log('小数')
        return false
    }
    nums.sort((a,b)=>a-b)
    n = nums.length
    if(nums[n-1] >target){
        return false
    }
        // 接下来就不会了呢
    // 状态压缩+记忆搜索
    dp = new Array(1 << n).fill(true)
    console.log(dp)
    return dfs( (1 << n)-1 , 0 )
};
const dfs = (s,p)=>{
    if(s == 0){
        return true
    }
    // 已经失败的状态
    if(!dp[s]){
        return dp[s]
    }
    dp[s] = false
    for(let i = 0; i < n;i++){
        // 加上之后溢出，推出
        if(nums[i] + p > target){
            break
        }
        // ？？
        if (((s >> i) & 1) != 0) {
            if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
                return true;
            }
        }
        return false
    }
}

nums = [4, 3, 2, 3, 5, 2, 1], k = 4
console.log(canPartitionKSubsets(nums,k))