// 744 寻找比目标字母大的最小字母
// 给你一个排序后的字符列表Letters,列表中只包含小写英文字母
// 另给出一个目标字母 target ，请你寻找在这一有序列表里比目标字母大的最小字母
// 在比较时，字母是依序循环出现的

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// 二分查找
var nextGreatestLetter = function(letters, target) {
    const len = letters.length
    let low = 0
    let high = len -1
    // 最大的都小于目标，返回首位
    if(letters[high] <= target){
        return letters[low]
    }
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (letters[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return letters[low]
};