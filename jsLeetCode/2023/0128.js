// 1664 生成平衡数组的方案数
// 给你一个整数数组nums。你需要选择恰好一个下标（下标从0开始）并删除对应的元素
// 请注意剩下元素的下标可能会因为删除操作而发生改变
// 如果一个数组满足奇数下标元素的和与偶数下标元素的和相等，该数组是一个平衡数组
// 返回删除操作后，剩下的数组nums是平衡数组的方案数

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    // 1为偶数 2为奇数
    let count1 = 0 
    let count2 = 0
    let count11 = 0
    let count22 = 0
    let ans = 0
    for(let i =0;i<nums.length;i++){
        if(i %2 == 0){
            count1 += nums[i]
        }else{
            count2 += nums[i]
        }
    }
    // 逐个位置删除
    for(let i = 0;i<nums.length;i++){
        // 当前位置删除 删除的如果为奇数
        // 奇数和为之前的奇数和 + 之后的偶数和
        // 偶数和为之前的偶数和 + 奇数和 - 之前的奇数和 - 当前这个 
        if(i%2 ==1){
            const cur1 = count11 + count2 - count22 - nums[i]
            const cur2 = count22 + count1 - count11
            if(cur1 == cur2){
                ans+=1
            }
        }else{
            const cur1 = count11 + count2 - count22
            const cur2 = count22 + count1 - count11 - nums[i]
            if(cur1 == cur2){
                ans+=1
            }
        }
        if(i %2 == 0){
            count11 += nums[i]
        }else{
            count22 += nums[i]
        }
    }
    return ans
};

nums = [1,2,3]
console.log(waysToMakeFair(nums))