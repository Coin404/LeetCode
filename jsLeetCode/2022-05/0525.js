// 467 环绕字符串中唯一的子字符串
// 把字符串s看作是“abcd.....xyz”的无限环绕字符串
// 给定另一个字符串p。返回s中唯一的p的非空字串的数量

/**
 * @param {string} p
 * @return {number}
 */
// dp数组统计该字母结尾的最大字符串
// 72ms
var findSubstringInWraproundString = function(p) {
    const dp = new Array(26).fill(0)
    let k = 0
    let sum = 0 
    for(let i = 0;i<p.length;i++)
    {   
        // 往前推进，找出连续字串
        if(i>0 && (p[i].charCodeAt() - p[i-1].charCodeAt() + 26) %26 == 1)
        {
            ++k
        }else{
            k = 1
        }
        // 更新dp数组的值
        sum = dp[p[i].charCodeAt()-'a'.charCodeAt()] > k ? sum: sum + (k-dp[p[i].charCodeAt()-'a'.charCodeAt()])
        dp[p[i].charCodeAt()-'a'.charCodeAt()] = Math.max(dp[p[i].charCodeAt()-'a'.charCodeAt()],k)
    }
    return sum
}


// 往前推进，记录初始的位置，以及推进的最大长度
var findSubstringInWraproundString = function(p) {
    const dp = new Array(26).fill(0)
    let k = 0
    let sum = 0 
    for(let i = 0;i<p.length;i++)
    {   
        // 往前推进，找出连续字串
        if(i>0 && (p[i].charCodeAt() - p[i-1].charCodeAt() + 26) %26 == 1)
        {
            k++
        }else{
            k = 1
        }
        // 更新dp数组的值
        sum = dp[p[i].charCodeAt()-'a'.charCodeAt()] > k ? sum: sum + (k-dp[p[i].charCodeAt()-'a'.charCodeAt()])
        dp[p[i].charCodeAt()-'a'.charCodeAt()] = Math.max(dp[p[i].charCodeAt()-'a'.charCodeAt()],k)
    }
    return sum
}
const p = "zab"
console.log(findSubstringInWraproundString(p))