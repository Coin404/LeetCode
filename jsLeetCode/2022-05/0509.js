// 942 增减字符串匹配
// 由范围[0,n]内所有的整数组成的n+1个整数的排列序列可以表示为长度为n的字符串s
// 如果 perm[i] < perm[i+1]  s[i]=='I
// 反之为 D
// 给定一个s,重构排列perm并返回它。如果有多个有效排列perm，返回其中任何一个

/**
 * @param {string} s
 * @return {number[]}
 */
// 贪心
// 注释的 88ms   43.5MB
// push  84ms   43.9MB
 var diStringMatch = function(s) {
    const len = s.length
    let low = 0,high = s.length
    // const ans = new Array(len+1).fill(0)
    let arr = []
    for(let i=0;i<len;i++){
        if(s[i]=='I'){
            // ans[i]=low++
            arr.push(low++)
        } else{
            // ans[i] = high--
            arr.push(high--)
        }
    }
    // ans[len] = high
    arr.push(high)
    return arr
};