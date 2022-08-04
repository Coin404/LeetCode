// 删除有序数组中的重复项
// 给一个升序排列的数组nums，原地删除重复出现的元素，使每个元素之出现一次
// 不实用额外的空间，必须在原地修改数组，并使用O（1）的额外空间复杂度

/**
 * @param {number[]} nums
 * @return {number}
 */

// 双指针
// 64ms
// 44.1MB
 var removeDuplicates = function(nums) {
    let left = 0
    let right = 0
    for(right;right < nums.length;right++){
        // 重复
        if( nums[right] != nums[left] ){
            left++
            nums[left] = nums[right]
        }
    }
    return left+1
};


const nums = [1,1,2]

console.log(removeDuplicates(nums))