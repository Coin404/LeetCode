// 找到k个最接近的元素 658
// 给定一个排序好的数组arr，两个整数k和x，从数组中找到最靠近x（两数之差最小的）k个数字
// 返回结果按照升序排好

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// 按照接近的规则排序，切分k个数字
// 双指针，将原数组切分成小于x和大于x两边
// 92ms
// 49MB
var findClosestElements = function (arr, k, x) {
  //   二分法找到分界点
  let left = 0,
    right = arr.length - 1;
  let middle = left + Math.floor((right - left) / 2);
  while (left < right) {
    middle = left + Math.floor((right - left) / 2);
    if (arr[middle] >= x) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  right = left;
  left = right - 1;
  //   向周围扩散k个数字
  while (k-- > 0) {
    // 触碰边界，对方+1
    if (left < 0) {
      right++;
    } else if (right >= arr.length) {
      left--;
    } else if (x - arr[left] <= arr[right] - x) {
      //   差值小的先进
      left--;
    } else {
      right++;
    }
  }
  //   进入数组
  const ans = [];
  for (let i = left + 1; i < right; i++) {
    ans.push(arr[i]);
  }
  return ans;
};

findClosestElements([1, 2, 3, 4, 5], 4, 3);

var findClosestElements2 = function (arr, k, x) {
  const list = [...arr];
  list.sort((a, b) => {
    // a-b < 0 交换位置 升序  a从后面换到前面
    if (Math.abs(a - x) != Math.abs(b - x)) {
      return Math.abs(a - x) - Math.abs(b - x);
    }
    return a - b;
  });
  const ans = list.slice(0, k);
  ans.sort((a, b) => a - b);
  return ans;
};
