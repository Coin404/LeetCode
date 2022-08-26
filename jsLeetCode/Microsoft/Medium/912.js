// 排序数组 手撕快排

// 124ms
// 52.8MB
var sortArray = function (nums) {
  return quickSort(nums, 0, nums.length - 1);
};

var quickSort = function (nums, left, right) {
  if (left >= right) {
    return nums;
  }
  const low = left;
  const high = right;
  const pos = Math.floor(Number(Math.random() * (high - low + 1) + low));
  swap(nums, left, pos);
  const temp = nums[left];
  while (left < right) {
    while (nums[right] >= temp && left < right) {
      right--;
    }

    nums[left] = nums[right];

    while (nums[left] <= temp && left < right) {
      left++;
    }
    nums[right] = nums[left];
  }
  nums[left] = temp;
  quickSort(nums, low, left - 1);
  quickSort(nums, left + 1, high);
  return nums;
};

var swap = function (nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};
nums = [0, 1, 4, 6, 4, 7, 8, 2, 4];
console.log(sortArray(nums));
