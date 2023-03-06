// 数组中的k-diff数对
// 给你一个整数数组nums和一个整数k，请你在数组中找出不同的k-diff数对
// 并返回不同的K-diff数对的数目
// k-diff数对定义为一个整数数对，并满足以下全部条件
//  0 <= i , j <=nums.length
// i != j 
// nums[i] - nums[j] = k

// 输入：nums = [3, 1, 4, 1, 5], k = 2
// 输出：2
// 解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
// 尽管数组中有两个 1 ，但我们只应返回不同的数对的数量。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 64ms   45.3MB
// 两次遍历
// 第一次哈希，第二次计算
 var findPairs = function(nums, k) {
    const cnt = new Set()
    const visit = new Set()
    for( const num of nums){
        // 如果之前有了小于自己的，把小于自己的加入
        if(visit.has(num-k)){
            cnt.add(num-k)
        }
        // 如果之前访问到了大于自己的，把自己加入结果数组
        if(visit.has(num+k)){
            cnt.add(num)
        }
        visit.add(num)
    }
    return cnt.size
};
const a = [1,2,3,4,5]
const l = 1
console.log(findPairs(a,l))