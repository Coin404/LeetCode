// 639 交替位二进制数
// 给定一个正整数，检查他的二进制表示是否总是01交替出现
// 
/**
/ * @param {number} n
/ * @return {boolean}
/ */


// 68   /   40.9
// 右移一位，进行异或，得到01111111...就说明符合条件
// 011111 与 10000 按位相与
 var hasAlternatingBits = function(n) {
    let m = n ^ (n >> 1)
    return (m&(m+1)) === 0
};