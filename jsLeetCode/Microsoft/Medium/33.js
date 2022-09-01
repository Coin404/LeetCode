// 搜索旋转排序数组
// 整数数组nums按升序排列，数组中的值互不相同
// 在传递给函数之前，nums在预先未知的某个下标k(0<=k<nums.length)上进行了旋转
// 使得数组变成了  k k+1 ... n-1 0 1 2 3
// 给你一个旋转后的数组nums和一个整数target，如果nums中存在这个目标值，返回他的下标
// 没有的话返回 -1 ，要求时间复杂度O（log n ）

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 大概率需要二分查找
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[left] == target) {
      return left;
    }
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[right] == target) {
      return right;
    }
    console.log(mid);
    // 说明进入的是正常的二分数组
    if (nums[left] < nums[right]) {
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 与数组首位比较
      if (nums[mid] == target) {
        return mid;
      }
      //   前半段有序
      if (nums[left] < nums[mid]) {
        if (nums[left] < target && nums[mid] > target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        // 后半段有序
        if (nums[mid] < target && nums[right] > target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }
  return -1;
};

console.log(search([5, 1, 2, 3, 4], 1));
