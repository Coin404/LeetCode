// 三数之和
// 给你一个包含n个整数的数组nums，判断nums中是否存在三个元素a,b,c,使得a+b+c=0？请你找出所有和为0且不重复的三元组
// 答案中不包括可重复的三元组

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 140ms
// 52MB
 var threeSum = function(nums) {
    let size = nums.length
    const ans = []
    nums.sort((a,b)=>{
        return a-b
    })
    // 从左侧的定值开始遍历
    if(nums[0] <= 0 && nums[size-1]>=0){
        let i = 0;
        while(i < size -2){
            // 最左侧的大于0，无解
            if(nums[i] > 0 )break;
            let first = i+1;
            let last = size-1;
            while(first < last){
                if(nums[i] * nums[last] > 0) break; //三数同符号，无解
                let sum = nums[i] + nums[first] + nums[last];
                if(sum == 0){
                    ans.push([nums[i],nums[first],nums[last]])
                }
                if(sum <=0){
                    // 负数过小，first右移动
                    while(nums[first] == nums[++first]){}
                }
                if(sum >=0){
                    // 正数过大，last左移动
                    while(nums[last] == nums[--last]){}
                }
            }
            while(nums[i] == nums[++i]){}
        }

    }
    return ans
};

console.log(threeSum([-1,0,1,2,-1,-4]))