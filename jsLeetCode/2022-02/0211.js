/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 数组排序，  0 和 k-1做差  
var minimumDifference = function(nums, k) {
    var order = nums.sort(function(a, b){return a - b});
    //实现升序排序
    var min = nums[i+k-1] - nums[0];
    for(var i = 0 ; (i+k-1)<nums.length ; i++ )
    {   
        a = nums[i+k-1] - nums[i]
        min = (a > min) ?min : a;
    }
    return min;
};