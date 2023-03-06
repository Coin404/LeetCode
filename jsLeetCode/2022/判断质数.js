// 判断一个数是否为质数


function isPrime_1(num){
    // 直接法，从2到 Sqrt(num)来遍历
    const tmp = Math.sqrt(num);
    for(let i = 2; i <= tmp ; i++) {
        // 整除说明不是质数
        if(num % i == 0)
        {
            return 0
        }
    }
    return 1
}

// 数学推论
// 质数分布规律：大于等于5的质数一定和6的倍数相邻，例如 5 7  11 13   17 19
// 但是出现在6的倍数相邻两侧并不一定就是质数
function isPrime_2(num){
    if(num == 2 || num == 3)
    {
        return 1
    }
    // 不在6的倍数两侧一定不是质数
    if( num %6 !=  1 && num % 6 != 5) {
        return 0
    }
    // 在6两侧在做上面的判断
    return isPrime_1(num)
}
var num = 61
console,console.log(isPrime_2(num));