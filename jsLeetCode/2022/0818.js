// 1224 最大相等频率
// 给定一个正整数数组 nums ,请找出满足下面要求的最长前缀，并返回该前缀的长度
// -从前缀中恰好删除一个元素后，剩下每个数字的出现次数都相同
// 如果删除后没有任何元素存在，也可以认为相同

/**
 * @param {number[]} nums
 * @return {number}
 */

// count 记录 x 出现次数 count[x]
// freq  记录 出现次数为f 的数的数目为 freq[f]
// maxFreq 表示最大出现次数

// 以nums[i]结尾的数组前缀符合一下三个之一
// 1，最大次数为 1 ，随便删
// 2，次数都是 maxFreq maxFreq-1 最大值出现一次，删除一个最大
// 2，除开一个数 其他都是 maxFreq 删除次数为1的
var maxEqualFreq = function(nums) {
    // 频度数组
    const freq = new Map();
    // 计数
    const count = new Map();
    let res = 0, maxFreq = 0;
    for (let i = 0; i < nums.length; i++) {
        // 初始化
        if (!count.has(nums[i])) {
            count.set(nums[i], 0);
        }
        // 说明某个数出现过了，那么他就会+1，原来记录的频度数组就会-1
        if (count.get(nums[i]) > 0) {
            freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) - 1);
        }
        // 计数
        count.set(nums[i], count.get(nums[i]) + 1);
        maxFreq = Math.max(maxFreq, count.get(nums[i]));
        // 如果还没有这个频度的数
        if (!freq.has(count.get(nums[i]))) {
            freq.set(count.get(nums[i]), 0);
        }
        freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) + 1);
        // 符合条件的数
        // 最大频度为一  2条件的数总和为数组长度  3条件的数总和为数组长度
        const ok = maxFreq === 1 ||
                freq.get(maxFreq) * maxFreq + freq.get(maxFreq - 1) * (maxFreq - 1) === i + 1 && freq.get(maxFreq) === 1 ||
                freq.get(maxFreq) * maxFreq + 1 === i + 1 && freq.get(1) === 1;
        if (ok) {
            res = Math.max(res, i + 1);
        }
    }
    return res;
};
