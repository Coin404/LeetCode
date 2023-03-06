// 1487 保证文件名唯一
// 如果已经被占用的文件名，系统会以 (k)的形式为其命名，返回字符串数组
/**
 * @param {string[]} names
 * @return {string[]}
 */

// set，如果一个已经存在了，对其进行改名
// 如果该文件改名后，仍然set失败，再次+1修改,时间复杂度非常高
// 4404ms
var getFolderNames = function (names) {
  const set = new Set();
  for (i in names) {
    if (!set.has(names[i])) {
      set.add(names[i]);
    } else {
      let count = 1;
      let tempName = names[i] + "(" + count + ")";
      while (set.has(tempName)) {
        tempName = names[i] + "(" + ++count + ")";
      }
      set.add(tempName);
      names[i] = tempName;
    }
  }
  return names;
};

// 等待优化
// 使用 哈希 姓名+编号
names = ["gta", "gta(1)", "gta", "avalon"];
console.log(getFolderNames(names));
