// 1822 数组元素积的符号
// 已知函数signFunc(x)根据x的正负返回特定值
// 给一个数组nums，另product为数组种的所有元素值的乘积

/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    let sign = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 0){
            return 0
        }
        if(nums[i] < 0){
            sign = -sign
        }
    }
    return sign
};