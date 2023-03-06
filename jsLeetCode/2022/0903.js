// 646 最长数队链
// 给出n个数对。在每一个数对中，第一个数字总是比第二个数字小。
// 现在我们定义一种跟随关系，当且仅当 b < c时，数对(c,d)才可以跟在（a,b）后面
// 给定一个数对集合，找出能形成的最长数对链的长度，你不需要用到所有的数队，你可以任意选择

/**
 * @param {number[][]} pairs
 * @return {number}
 */

// 贪心，选完之后后面要有更多的数？
// 右侧排序，如果左侧大于前面的右侧

// 动态规划，计算出dp[i] 所有以 pairs[i] 结尾的最长数对链的长度
// 先找出所有满足 pairs[i][0] > pairs[j][1]的j,并求出最大的dp[j]
// 先排序，初始为1 
// 160ms
// 44.8MB
 var findLongestChain = function(pairs) {
    const n =  pairs.length
    const dp = new Array(n).fill(1)
    // 按照第一项升序
    pairs.sort((a,b)=>a[0]-b[0])
    for(let i = 0; i<n ;i++){
        for(let j = 0 ; j<i;j++){
            if(pairs[i][0] > pairs[j][1]){
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
        }
    }
    return dp[n-1]
};


// 68ms
// 44.3MB
var findLongestChain2 = function(pairs){
    const n = pairs.length
    let ans = 0
    let cur = -Infinity
    pairs.sort((a,b)=>a[1]-b[1])
    for(let i = 0 ;i< n ;i++){
        if(pairs[i][0] > cur){
            cur = pairs[i][1]
            ans++
        }
    }
    return ans 
}