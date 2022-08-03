// 整数反转
// 给一个32位有符号整数x，返回数字部分反转后的结果

/**
 * @param {number} x
 * @return {number}
 */

// 72ms
// 42.6MB
// 如何处理溢出问题呢？ 不允许使用64位整数，该方法不合理！
 var reverse = function(x) {
    if(x > 0 ){
        x = String(x).split("").reverse().join("")
    }else{
        x = '-'+ String(Math.abs(x)).split("").reverse().join("")
    }
    let k = 31
    let flag = 1
    while(k!=0){
        flag = flag *2
        k--
    }
    if(Math.abs(x) > flag-1){
        return 0
    }
    return x
};


// *10 推入数字，判断是否溢出
// 不等式移项，通过 INT_MAX / 10 来判断
const reverse2 = function(x){
    let rev = 0
    while(x != 0){
        const digit = x % 10
        // 取反两次保持原值，但是布尔和空会变成树枝
        x = ~~( x /10)

        rev = rev*10 +digit
        // 此处为推导
        // 🌟 相等的情况下，若是还能推入数字，只能是2，因为题目限制了21亿多
        // INT_MAX = （ INT_MAX / 10 ）+ 7
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
        return rev
    }
}

console.log(reverse(1563847412))
reverse(1563847412)