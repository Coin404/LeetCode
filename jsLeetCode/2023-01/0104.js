// 1802 有界数组中指定下标处的最大值
// 给你三个正整数n index 和 maxSum 你需要构造一个同时满足下述所有条件的数组 nums
// - nums.length == n
// - nums[i] 是正整数 0<= i < n
// - abs( nums[i] - nums[i+1] ) <= 1 其中 0 <= i < n-1
// - nums 中所有元素之和不超过 maxSum
// - nums[index] 的值被最大化
// 泛会所构造的数组中的nums[index]

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  // 二分搜索，左边界为1 右边界为maxSum
  let left = 1,
    right = maxSum;
  while (left < right) {
    // 加上0.5向上靠拢
    let middle = Math.floor(left / 2 + right / 2 +1/2);
    if (valid(middle,n,index,maxSum)) {
      // 符合条件，左边界加一
      left = middle;
    } else {
      right = middle-1;
    }
  }
  return right;
};

const valid = (middle,n,index,maxSum)=>{
    // 左右两边的值计算
    let left = index
    let right = n-index-1
    return middle + cal(middle,left) + cal(middle,right) <= maxSum 
}

// 计算当前区间的累积和
const cal = (number,length)=>{
    // 不会出现1 1 1 1
    if(length+1 < number){
        // 末尾最小项
        const small = number - length
        // 累积
        return Math.floor( (number - 1 + small)*length/2)
    }else{
        // 1的数目
        const ones = length- ( number - 1)
        return Math.floor(number*(number-1)/2) + ones
    }
}

console.log(maxValue(2332617, 1674899, 775481595));
