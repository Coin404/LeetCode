//目标和  494
//给一个整数数组nums 和整数target
//向属组中每一个整数前面加上+ - 串联起来所有的整数
//返回可以构造的等于target的表达式
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//回溯法 ，暴力
//count记录符合条件的有几个然后遍历整个数组
 var findTargetSumWays = function(nums, target) {
    const n = nums.length;
    let count = 0;
    const backTrack = (nums,target,index,sum)=>{
        if(index == n){
            if(target == sum){
                count++
            }
        }
        else{
            backTrack(nums,target,index+1,sum+ nums[index]);
            backTrack(nums,target,index+1,sum- nums[index]);
        }
    }
    backTrack(nums,target,0,0);
    return count;

};

//动态规划
//正数和sump  负数和sumn 
//  sump - sumn = targer
//sump + sumn -sumn + sump = target+ sump +sumn
//   2 sump = target + sum
//转化成选出一定的数字使得和为 target +sum

var findTargetSumWays1 = function(nums, target) {
    const n = nums.length;
    let sum = 0;
    for(const num of nums){
        sum += num;
    }
    const diff = sum - target;
    if(diff < 0 || diff %2 != 0 || (sum + target) < 0 ){
        return 0;
    } 
    const target2 = (target + sum) / 2;
    const dp = new Array(n+1).fill(0).map(() => new Array(target2+1).fill(0))
    dp[0][0] = 1;
    for(let i = 1 ;i <= n ;i++){
        const num = nums[i-1];
        for(let j = 0;j <= target2;j++){
            dp[i][j] = dp[i-1][j];
            //如果还能放下那么就等于前面取到j + 前面取到j-num
            if(j >= num ){
                dp[i][j] += dp[i-1][j-num];
            }
            // console.log(dp[i][j]);
        }
    }
    return dp[n][target2];
};

const a = new Array(5).fill(1);
let answer = findTargetSumWays1(a,5);
console.log(answer);


//滚动数组倒序遍历
//dp只与上一行有关，倒序刷新数组就可以保证转移来的是上一行的数
var findTargetSumWays2 = function(nums, target) {
    const n = nums.length;
    let sum = 0;
    for(const num of nums){
        sum += num;
    }
    const diff = sum - target;
    if(diff < 0 || diff %2 != 0 || (sum + target) < 0 ){
        return 0;
    } 
    const target2 = (target + sum) / 2;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (const num of nums) { 
        for (let j = target2; j >= num; j--) {
            dp[j] += dp[j - num];
        }
        //  1  0 0 0  初始状态为什么都没有
        //  第一个数开始搜索 [1,1,1]  目标 3 
        //  dp[3] = dp [3-1]  此时dp[i]表示第一个数加入时候能取到i的个数
        //   1  1  0  0 
        //  第二个数开始搜索 dp[j] += dp[j-num] 其实就是 dp[i-1][j] += dp[i-1][j-num]
        //  1   2  1   0
        //  1   3  2   1
        //本质上是之前的计算的逆计算
    }
    return dp[target2];
};
