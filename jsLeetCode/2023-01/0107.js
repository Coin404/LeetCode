// 1658 将x减到0的最小操作数
// 给你一个整数数组nums和一个整数x，每一次操作时，你应当以出数组nums最左边或最右边的元素，然后从x中减去钙元素的值
// 如果能恰好减到0，返回最小操作数

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

function MathDefine() {
  this.sum = function (nums) {
    return eval(nums.join("+"));
  };
}
var _ = new MathDefine();

// 滑动数组
var minOperations = function (nums, x) {
  const n = nums.length;
  const sum = _.sum(nums);
  if (sum < x) {
    return -1;
  }

  //   left = -1 空前缀 right = n 空后缀
  let right = 0;
  let lsum = 0,
    rsum = sum;
  let ans = n + 1;
  for (let left = -1; left < n; ++left) {
    if (left != -1) {
      lsum += nums[left];
    }
    while (right < n && lsum + rsum > x) {
      rsum -= nums[right];
      ++right;
    }
    if (lsum + rsum === x) {
      ans = Math.min(ans, left + 1 + n - right);
    }
  }

  return ans > n ? -1 : ans;
};

const nums = [1, 2, 34, 5, 4, 2, 45];
console.log(minOperations(nums, 48));
