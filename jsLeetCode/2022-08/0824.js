// 1460 通过翻转子数组使两个数组相等
// 给你两个长度相同的整数数组target 和 arr
// 每一步中，你可以选择arr的任意非空子数组将它翻转，你可以执行此过程任意次。
// 如果能让arr和 target相同，返回ture

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

// 80ms
// 43，1MB
// 可以任意翻转，其实就是这两个数组排序后相等，就可以做到
var canBeEqual = function (target, arr) {
  target = target.sort((a, b) => {
    return a - b;
  });
  arr = arr.sort((a, b) => {
    return a - b;
  });
  if (arr.length == target.length) {
    for (let i = 0; i < target.length; i++) {
      if (arr[i] != target[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// 哈希表遍历接受
// 64ms
// 43.7MB
var canBeEqual2 = function(target,arr){
    const mapHaxi = new Map() 
    for(let i of target){
        mapHaxi.set(i,(mapHaxi.get(i) || 0 ) + 1)
    }
    for(let i of arr){
        mapHaxi.set(i,(mapHaxi.get(i) || 0 ) - 1)
    }
    console.log(mapHaxi)
    for(let [key,val] of mapHaxi){
        if(val != 0){
            return false
        }
    }
    return true
}

console.log(canBeEqual2([1, 2, 3, 4], [2, 4, 1, 3]));
