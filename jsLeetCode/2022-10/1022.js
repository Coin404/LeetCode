// 915 分割数组
// 给定一个数组nums，将其划分为两个连续子数组left和right，使得
// left中的每个元素都小于或等于right中的每个元素
// left和right都是非空
// left的长度要尽可能小

/**
 * @param {number[]} nums
 * @return {number}
 */
// 72ms
// 52.1MB
var partitionDisjoint = function (nums) {
  const rightArr = new Array(nums.length).fill(0);
  let minRight = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = minRight;
    if (nums[i] < minRight) {
      minRight = nums[i];
    }
  }
  let maxLeft = nums[0]
  for(let i = 0;i<nums.length;i++){
    if(maxLeft <= rightArr[i]){
        // 第一个该点就是切分点
        return i+1
    }
    if(nums[i] > maxLeft){
        maxLeft = nums[i]
    }
  }
};
