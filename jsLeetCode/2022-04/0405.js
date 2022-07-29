// 762 二进制表示中质数个计算置位
// 给你两个整数 left 和 right ， 在闭区间[left, right]范围内，统计并返回计算置位数为质数的证书个数
// 计算置位位数就是二进制表示中 1 的个数

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

// 遍历区间，找到每一个的二进制1的个数  n & (n-1)
// 判断这个数是不是质数，是的话就+1
 var countPrimeSetBits = function(left, right) {
    let ans = 0;
    for(let i = left;i <= right; i++){
        const num  = hanmingWeight(i);
        if(isPrime(num)) {
            ans++;
        }
    }
    return ans;
};

// 获取二进制数中1的位数
var hanmingWeight = function(n) {
    let ret = 0;
    // 每次与n-1相与，运算结果恰为吧二进制中最低位的1变为0的结果
    while(n) {
        n &= (n-1);
        ret++;
    }
    return ret;
}

// 判断一个数书是否是质数（最大长度为 10^6 这其中的最大质数是19）
var isPrime = function(num){
    if(num === 2 || num === 3 || num === 5 || num === 7 || num === 11 || num === 13 || num === 17 || num === 19) {
        return 1
    }
}