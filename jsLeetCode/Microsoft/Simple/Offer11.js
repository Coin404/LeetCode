// 旋转数组的最小数字
// 把一个数组最开始的若干个元素搬到数组的末尾，称之为数组的旋转
// 给定一个可能存在重复元素值的数组 numbers，它原本是一个升序排列的数组，并按上述情形做了一次旋转
// 请返回旋转数组的最小元素

/**
 * @param {number[]} numbers
 * @return {number}
 */
// 二分时间最速
// 56ms
// 41MB
var minArray = function (numbers) {
    let low = 0
    let high = numbers.length -1 
    while(low < high){
        const mid = low + Math.floor((high - low)/2)
        // 小于，在左侧
        if( numbers[mid] < numbers[high]){
            high = mid
        }else if ( numbers[mid] > numbers[high]){
            // 大于，在右侧
            low = mid+1
        }else{
            // 等于，在右侧，但是得缩右边一次
            high-=1
        }
    }
    return numbers[low]
};

minArray([3,3,1,3]);
