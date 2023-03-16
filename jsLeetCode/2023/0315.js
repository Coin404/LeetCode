// 1615 最大网络秩
// n座城市和一些连接这些城市的道路 roads 构成一个基础设施网络
// 每个 roads[i] = [ai,bi]表示两者之间有一条双向通道
// 两座不同城市构成的城市对的网络秩定义为 : 与这两座城市直接相连的道路总数，如果只存在一条道路直接连接，则这条道路只计算一次
// 整个基础设施网络中的 最大网络秩 是所有不同城市对中国呢的最大
// 给定 n 和 roads ，返回整个基础设施网络的最大网络秩

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

// 计算所有顶点的边，最大边数的两个顶点和为max，如果两顶点靠近，-1
var maximalNetworkRank = function (n, roads) {
  if (roads.length == 0) {
    return -1;
  } else if (roads.length == 1) {
    return 1;
  }
  // 只需关注最大和次大
  //  connect 数组表示两点是否连接
  const degree = new Array(n).fill(0);
  const connect = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let item of roads) {
    degree[item[0]] += 1;
    degree[item[1]] += 1;
    connect[item[0]][item[1]] = 1;
    connect[item[1]][item[0]] = 1;
  }
  //   处理出最大值数组和次大值数组
  let first = -1,
    second = -2;
  let firstArr = [];
  let secondArr = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] > first) {
      second = first;
      secondArr = [...firstArr];
      first = degree[i];
      firstArr = [i];
    } else if (degree[i] == first) {
      firstArr.push(i);
    } else if (degree[i] > second) {
      secondArr = [i];
      second = degree[i];
    } else if (degree[i] == second) {
      secondArr.push(i);
    }
  }
  //   最后进行循环比较，如果最大值只有一个就是最大值和次大找
  if (firstArr.length == 1) {
    const firstNode = firstArr[0];
    for (const secondNode of secondArr) {
      if (!connect[firstNode][secondNode]) {
        return first + second;
      }
    }
    return first + second - 1;
  } else {
    for (const firstNode of firstArr) {
      for (const secondNode of firstArr) {
        if (firstNode != secondNode && !connect[firstNode][secondNode]) {
          return first * 2;
        }
      }
    }
    return first * 2 - 1;
  }
};
(n = 4),
  (roads = [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ]);
console.log(maximalNetworkRank(n, roads));
