// 生成的每种字符都是奇数个的字符串 1374
// 给定一个整数n，返回含n个字符的字符串，其中每种字符在该字符串中刚好出现奇数次
// 返回的字符串必须只含有小写英文字母
//  1<=n<=500
/**
 * @param {number} n
 * @return {string}
 */

// 60ms  换用 & 56me
// 注意：& 运算符的优先级比 == 低
// 42MB
 var generateTheString = function(n) {
    let str = ''
    for(let i = 0;i < n-1 ; i++){
        str += 'a'
    }
    if((n & 1) == 0){
        str += 'b'
        return str
    }else{
        str += 'a'
        return str
    }
};

console.log(((4 & 1 )== 0))