// 1945 字符串转化后的各位数字之和
// 给你一个小写字母组成的字符串s，以及一个整数k
// 首先，用字母在字母表中的位置替换该字母，将s转为为一个整数 a-1
// 接着将整数转换为其各位数字之和，共重复操作k次

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str = ''    
    for(let i = 0;i<s.length;i++){
        str+= ( s[i].charCodeAt() - 'a'.charCodeAt() +1)
    }
    let sum = 0
    while(k > 0){
        k--
        sum=0
        for(let i = 0 ;i<str.length;i++){
            sum += Number(str[i])
        }
        str = String(sum)
    }
    return sum
};

console.log(getLucky('leetcode',2))