// 2389 和有限的最长子序列
// 给你一个长度为 n 的整数数组 nums ,和一个长度为 m 的整数树数组 queries
// 返回一个长度为 m 的数组 answer，其中 answer[i] 是 nums 中元素之和小于等于 queries[i]的子序列的最大长度
// 子序列是由一个数组删除某些元素，但不改变剩余元素顺序得到的一个数组

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
// 排序，然后找前缀和
// queries 就是找到 小于 queries[i] 的最大前缀和
var answerQueries = function (nums, queries) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  const n = nums.length;
  const m = queries.length;
  const fn = new Array(n+1).fill(0);
  const answer = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    fn[i+1] = fn[i] + nums[i];
  }
  // 二分查找,找到第一个f[i]>q的最小值i，长度为i-1
  for (let i = 0; i < m; i++) {
    answer[i] = BinarySearch(fn, queries[i]) - 1;
  }
  return answer
};

// 查找第一个大于target的值
const BinarySearch = (arr, target) => {
  let low = 1,
    high = arr.length;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    // 当前值大于目标值，所找值在左侧
    if (arr[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

(nums = [4, 5, 2, 1]), (queries = [3, 10, 21]);
console.log(answerQueries(nums, queries));
