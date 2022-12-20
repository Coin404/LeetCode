// 1760 袋子里最少数目的球
// 给你一个整数数组 nums 其中 nums[i] 表示第 i 个袋子里球的数目。同时给你一个整数 maxOperations
// 你可以如下操作 maxOperations 次
// -选择任意一个袋子，并将袋子里的球分到两个新袋子，每个袋子里都有正整数个球
// -你的开销是单个袋子里树木的最大值，你想要最小化开销

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */

// 二分查找一个数，然后计算这个数会使得数组需要操作的次数
// 利用二分来找寻可行解的边界，直到锁定到某一个值
var minimumSize = function (nums, maxOperations) {
  let left = 1;
  let right = _.max(nums);
  let ans = 0;
  while (left <= right) {
    const y = Math.floor((left + right) / 2);
    let option = 0;
    for (const x of nums) {
      option += Math.floor((x - 1) / y);
    }
    // 如果小于操作次数说明这是一个合理解，那么最小解在其之下
    // 如果不合理，说明最小解在其之上
    if (option <= maxOperations) {
      ans = y;
      right = y - 1;
    } else {
      left = y + 1;
    }
  }
  return ans;
};
