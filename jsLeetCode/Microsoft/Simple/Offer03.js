// 数组中重复的数字
// 在长度为n的数组nums 里有所得数字都在0～n-1的范围内，数组中有些数字是重复的。
// 找出其任意一个重复的数字

/**
 * @param {number[]} nums
 * @return {number}
 */

// 排序，遍历
// 哈希表，遍历
// 下标标记
// 52ms
// 45.3MB
 var findRepeatNumber = function(nums) {
    for(let i = 0;i<nums.length;i++){
        const n = nums.length
        let k = nums[i]
        if(k < 0){
            k+=n
        }
        // 标记过
        if(nums[k] < 0){
            return k
        }else{
            // -n到负数标记
            nums[k] -= n
        }
    }
};