// 三步问题
// 楼梯有n阶，一次可以上 1， 2， 3计算上楼的结果
// 你需要对结果模1000000007。

/**
 * @param {number} n
 * @return {number}
 */
// 116ms
// 67.9MB
var waysToStep = function(n){
    if(n == 1){
        return 1
    }
    if(n == 2){
        return 2
    }
    if(n == 3){
        return 4
    }
    let dp = new Array(n).fill(0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    dp[3] = 4
    for(let i =4;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
        dp[i] %= 1000000007
    }
    return dp[n]
}

// 递归事件溢出
 var waysToStep1 = function(n) {
    if(n == 1){
        return 1
    }
    if(n == 2){
        return 2
    }
    if(n == 3){
        return 4
    }
    return waysToStep(n-2)+waysToStep(n-3)+waysToStep(n-1)
};


console.log(waysToStep(5))