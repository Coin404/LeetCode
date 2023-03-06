// 雇佣k名工人的最低成本 857

// n名工人，给定两个数组 quality 和 wage，其中有quality[i]表示第i名的工作质量
// 最低薪资为 wage[i]
// 雇佣k名
// 对工资组中的每名工人，应当按照其工作质量与同组其他人工作质量比列相同
// 工资组中每名工人至少得到他们期望的最低

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */

// 将工人按照权重升序排列
// 枚举每一个能成为工资组中权重最大的工人来计算工资组消耗
// 满足的条件 1.单位劳动价值低 2.总工作量小
var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;
  const h = new Array(n).fill(0).map((_, i) => i);
//   按照权重比排队
  h.sort((a, b) => {
    return quality[b] * wage[a] - quality[a] * wage[b];
  });
//   设置res为最大值
  let res = 1e9;
  let totalq = 0.0;
  const pq = new MaxPriorityQueue();
  for (let i = 0; i < k - 1; i++) {
    totalq += quality[h[i]];
    pq.enqueue(quality[h[i]]);
  }
  for (let i = k - 1; i < n; i++) {
    let idx = h[i];
    totalq += quality[idx];
    pq.enqueue(quality[idx]);
    const totalc = (wage[idx] / quality[idx]) * totalq;
    res = Math.min(res, totalc);
    totalq -= pq.dequeue().element;
  }
  return res;
};
