// 952 二倍数对数组
// 给定一个长度为偶数的整数数组arr 只有对arr进行重组后可以满足
// 对于每一个 0 <= i < len(arr)/2 都有 arr[2*i + 1] = 2*arr[2*i]时返回true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 数组奇数项是前面偶数项的一倍
// 排序，从前后往后遍历
 var canReorderDoubled = function(arr) {
    //  升序
    arr.sort( function (a,b){
        return a-b
    })
    //将正数 和 负数分开
    let  num = 0
    let num0 = 0
    const arrNeg = []
    while(arr[0] <= 0)
    {   
        // 处理0的部分，如果是0，出栈计数
        if(arr[0] == 0){
        arr.shift()
        num0++
    }else{
        arrNeg.unshift(arr[0])
        arr.shift()
        num++
    }
    }
    console.log(arr);
    console.log(arrNeg);
    // console.log(num0)
    if(num % 2 != 0 || num0 %2 !=0){
        return false
    } else{
        if(num!=0){
            if(isDouble(arr) && isDouble(arrNeg)){
                return true
            }
        } else if(isDouble(arr)){
            return true
        }
    }
    return false
};

function isDouble(arr){
    const len = arr.length
    console.log(len)
    console.log(arr);
    // 超出时间限制，如果一个个删除寻找元素
    while( arr.length!= 0){
        const double = arr.indexOf(2*arr[0])
        console.log(double)
        // indexOf返回-1表示没有找到该元素
        if(double != -1){
            arr.splice(double, 1);
            arr.splice(0,1)
        } else{
            return false
        }
    }
    return true
}

var arr = 
[2,4,0,0,8,1]
console.log(canReorderDoubled (arr) );

// 官解答
var canReorderDoubled1 = function(arr) {
    // 建立一个Map
    const cnt = new Map();
    // 遍历所有的数组项
    for (const x of arr) {
        // 计数，表明该项有多少（哈希表） x <===> val
        cnt.set(x, (cnt.get(x) || 0) + 1);
    }
    // 如果0的数目不是偶数，直接返回s
    if ((cnt.get(0) || 0) % 2 !== 0) {
        return false;
    }
    // 新建数组
    const vals = [];
    // 遍历键，存到数组中
    for (const x of cnt.keys()) {
        vals.push(x);
    }
    // 升序排序数组
    vals.sort((a, b) => Math.abs(a) - Math.abs(b));
    //遍历每一个值
    for (const x of vals) {
        // 无法找到足够的 2x 与 x 配对
        if ((cnt.get(2 * x) || 0) < cnt.get(x)) { 
            return false;
        }
        // 有足够的进行配对了，减去这些配对了的值
        cnt.set(2 * x, (cnt.get(2 * x) || 0) - cnt.get(x));
    }
    return true;
};
