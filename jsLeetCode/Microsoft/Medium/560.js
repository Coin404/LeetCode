// 和为k的子数组

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 前缀和和哈希表
// pre[i] 记录所有的前缀和  k = pre[i] - pre[j]表示一组连续的
// 80ms
// 49.7MB
var subarraySum = function (nums, k) {
  let ans = 0;
  const map = new Map();
  let pre = 0;
  map.set(0, 1);
  for (const x of nums) {
    pre += x;
    // 查询哈希表，看是否有满足的前缀
    if (map.has(pre - k)) {
      ans += map.get(pre - k);
    }
    map.set(pre, (map.get(pre) || 0) + 1);
  }
  return ans;
};

const a = [1, 2, 3];
console.log(subarraySum(a, 3));
