// 面试 17.05 字母与数字
// 给定一个放有字母和数字的数组，找到最长的子数组，且包含字母和数字的个数相同
// 返回该子数组，若存在多个最长子数组，返回左端点下班值最小的数组，若不存在，返回空数组

/**
 * @param {string[]} array
 * @return {string[]}
 */

// 前缀和，字母为1 数字为-1
// 寻找转换后的元素和为0的最长子数组
// 两个下标对应的前缀和相等，则两者的元素和为0
var findLongestSubarray = function (array) {
  const n = array.length;
  const indices = new Map
  indices.set(0,-1)
  let sum = 0
  let maxLength = 0
  let startIndex = -1
  for(let i=0;i<n;i++){
    if(isNumber(array[i])){
        sum--
    }else{
        sum++
    }
    if(indices.has(sum)){
        // 已经推入过一次，那么此次可以计算出子数组
        const firstIndex = indices.get(sum)
        if(i-firstIndex > maxLength){
            maxLength = i-firstIndex
            startIndex = firstIndex+1
        }
    }else{
        indices.set(sum,i)
    }
  }
  if(maxLength ==0){
    return []
  }
  return [...array.slice(startIndex,startIndex+maxLength)]
};

const isNumber = (ch)=>{
    return Number(ch) === Number(ch) 
}

array =["A","1"]
console.log(findLongestSubarray(array));
