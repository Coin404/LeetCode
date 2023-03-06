// 在长度为2N的数组中找出重复N次的元素

// 给定一个整数数组nums，该数组有以下属性
// nums.length == 2*n
// nums 包含n+1各不同的元素
// nums中恰好有一个元素重复N次



/**
 * @param {number[]} nums
 * @return {number}
 */

// 记录第一个数字，向后探索，和他重复则计数器加一，不重复计数器减一
// 计数器为负值更换数字
// 只能找出 > n/2的
 var repeatedNTimes = function(nums) {
    const len = nums.length
    let count = 0
    let ans = nums[0]
    for(let i =0 ;i<len;i++){
        if(nums[i] == ans){
            count++
        } else{
            count--
            if(count < 0){
                ans = nums[i]
                count = 1
            }
        }
    }
    return ans
};

const  a = [2,1,2,5,3,2]
console.log(repeatedNTimes(a))