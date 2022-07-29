// 905  按奇偶排序数组
// 给定一个整数数组，将nums中所有的偶数元素移动到数组签名，后跟奇数元素

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 双指针
// 左边找到第一个奇数,右边找到第一个偶数，交换
// 直到两个指针相遇
 var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length-1;
    while(left < right) {
        while((nums[left]&1 )== 0 && (left < right)) 
        {
            left++
        };
        while((nums[right]&1) != 0 && (left < right)){
            right--
        };
        if(left < right){
            const tes = nums[left];
            nums[left] = nums[right];
            nums[right] = tes;
            left++
            right--
        }
    }
    return nums;
};

const nums = [0,2]
console.log(sortArrayByParity(nums))