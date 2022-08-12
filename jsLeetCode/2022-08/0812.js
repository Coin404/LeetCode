// 用户分组 1282
// 有n个人被分成数量未知的组。每个人都被标记为一个从0 到 n-1 的唯一ID
// 给定一个整数数组 groupSizes , 其中 groupSizes[i] 是第 i 个人所在的组的大小
// 每个人恰好只出现在一个组中，并且每个人必须在一个组中

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
// 如何分配收集？
// 80ms
// 46.1MB
var groupThePeople = function (groupSizes) {
  const ans = [];
  // 记录目前有哪些组
  const set = new Set();
  for (let i = 0; i < groupSizes.length; i++) {
    console.log(set)
    // 往已有的组添加数据
    if (set.has(groupSizes[i])) {
      for (let j = ans.length - 1; j >= 0; j--) {
        if (ans[j].size == groupSizes[i]) {
          ans[j].arr.push(i);
          //   满了
          if (ans[j].arr.length == ans[j].size) {
            set.delete(groupSizes[i]);
          }
          break
        }
      }
    } else {
      set.add(groupSizes[i]);
      ans.push({
        size: groupSizes[i],
        arr: [i],
      });
     if(groupSizes[i] == 1){
        set.delete(groupSizes[i])
     }
    }
  }
  return ans.map((item) => {
    return item.arr;
  });
};
const arr = [2,2,1,1,1,1,1,1];
console.log(groupThePeople(arr));
