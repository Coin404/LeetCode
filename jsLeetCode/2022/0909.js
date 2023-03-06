// 1598 文件夹操作日志搜集齐
// 每次文件夹操作，保存一条日志记录
// “ ../  ” 移动到父文件夹，如果已经在主文件夹下，不动
//  “ ./ ” 停留当前文件夹
//  “  x/ ” 移动到名为x的文件夹，数据总在x中
// 给定一个字符串列表logs 其中logs[i]是用户在 i^th步执行的操作
// 文件启动的时候位于主文件夹，然后执行
// 执行完所有的变更文件操作后，找出返回主文件夹的最小步数

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0;
  for (const log of logs) {
    if ("./" == log) {
      continue;
    } else if ("../" == log) {
      if (depth > 0) {
        depth--;
      }
    } else {
        depth++
    }
  }
  return depth;
};
