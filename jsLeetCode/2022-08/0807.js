// 636 函数的独占时间
// 单线程CPU运行含有n道函数的程序，每个函数有一个 0 - n-1的标识符
// 函数调用 存储在一个调用栈上，当一个函数调用开始时，他的标识符会推入栈中。
// 调用结束时，会从栈中探出。标识符位于栈顶的函数是当前正在执行的函数。
// 每当一个函数开始或者结束时，将会记录一条日志，包括函数标识符，刚开始还是结束，以及相应的时间戳
// 给定一个该日志组成的列表logs
// 函数可以调用多次，可能存在递归调用。

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

// 80ms
// 45MB
// 用一个栈来记录上一次的数字是什么，如果后续遍历到了end且数字一致，退栈
var exclusiveTime = function (n, logs) {
  const len = logs.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  let top = -1;
  let preTime = 0;
  for (let i = 0; i < len; i++) {
    const cur = logs[i].split(":");
    if (cur[1] == "start") {
      // 开始，入栈，同时如论计算上一个时间长度是多少
      if (top != -1) {
        ans[stack[top]] += cur[2] - preTime;
        preTime = cur[2];
      }
      stack[++top] = cur[0];
    } else if (cur[1] == "end") {
      // 直接把end的时间戳末统一成时间戳开始
      cur[2]++;
      // 退栈，结算
      --top;
      ans[cur[0]] += cur[2] - preTime;
      preTime = cur[2];
    }
  }
  return ans;
};

const a = [
  "0:start:0",
  "1:start:5",
  "2:start:6",
  "3:start:9",
  "4:start:11",
  "5:start:12",
  "6:start:14",
  "7:start:15",
  "1:start:24",
  "1:end:29",
  "7:end:34",
  "6:end:37",
  "5:end:39",
  "4:end:40",
  "3:end:45",
  "0:start:49",
  "0:end:54",
  "5:start:55",
  "5:end:59",
  "4:start:63",
  "4:end:66",
  "2:start:69",
  "2:end:70",
  "2:start:74",
  "6:start:78",
  "0:start:79",
  "0:end:80",
  "6:end:85",
  "1:start:89",
  "1:end:93",
  "2:end:96",
  "2:end:100",
  "1:end:102",
  "2:start:105",
  "2:end:109",
  "0:end:114",
];
exclusiveTime(8, a);
