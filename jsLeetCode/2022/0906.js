// 828 统计子串中唯一字符
// 我们定义了一个函数countUniqueChars(s)来统计字符串S中唯一字符，并返回唯一字符的个数
// 例如：s = “LEETCODE”，则其中“L”，“T”，“C”，”O“，”D“
// 都是唯一字符，因为它们只出现一次，countUniqueChars(s) = 5 
// 本题将会给你一个字符串s，我们需要返回 countUniqueChars(t) 的总和，其中t是s的子字符串
// 某些子字符串可能也是重复的，但是统计必须算上这些重复的子字符串

/**
 * @param {string} 
 * @return {number}
 */

// 100ms
// 48.5MB
// 记录相同字符串在数组中出现的位置
// 可以通过前后位置算出该字符串在数组中的贡献度是多少
 var uniqueLetterString = function(s) {
    const index = new Map()
    for(let i = 0 ;i<s.length;i++){
        const c = s[i]
        if( !index.has(c)){
            index.set(c,[])
            // 前一个位置为-1
            index.get(c).push(-1)
        }
        index.get(c).push(i)
    }
    let res = 0
    for( const [_, arr] of index.entries()){
        // 最后一个位置为末尾
        arr.push(s.length)
        // 通过前后位置，判断含单个该字符串的贡献度
        for(let i = 1; i < arr.length-1 ;i ++){
            res+= (arr[i] - arr[i-1]) * (arr[i+1] - arr[i])
        }
    }
    return res
};