// 1753 移除石子的最大的分
// a b c 三堆石子
// 每回合从两个不同的非空堆取出石子，+1分，存在两个或者更多空堆的时候游戏结束

// 先把最少的拿成0  然后另外两堆保持平衡 ，再取两者最小值

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
    const nums =  [a,b,c].sort((a,b)=>{
        return a-b
    })
  for (let i = 0; i < nums[0]; i++) {
    if(nums[1]>=nums[2]){
        nums[1]-=1
    }else{
        nums[2]-=1
    }
  }
  return nums[0] + Math.min(nums[1],nums[2])
};
