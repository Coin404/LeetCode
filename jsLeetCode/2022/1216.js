// 1785 构成特定和需要添加的最少元素
// 给你一个整数数组nums 和 两个整数 limit 与 goal
// 数组 nums 有一条重要属性： abs（nums[i] <= limit ）
// 返回使数组元素综合等于 goal 所需要向数组中添加的最少元素数量 添加元素不应改变数组中的重要属性
/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
    let sum = 0
    for(let i=0; i< nums.length ; i++){
        sum += nums[i]
    }
    const goalAbs = Math.abs(sum - goal)
    return Math.ceil(goalAbs / limit)
};

const nums =[1,-1,1]
console.log(minElements(nums,3,-4))