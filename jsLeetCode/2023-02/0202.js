// 1129 颜色交替的最短路径
// 在一个有向图中，节点分别标记为 0，1，...，n-1。每条边为红色或者蓝色，且存在自环或平行边。
// red_edges 中每个 [i,j] 对表示从节点 i 到节点 j 的红色有向边，blue类似
// 返回长度为n的数组 answer ，其中 answer[X] 是从节点0到节点x的红色边和蓝色边交替出现的最短路径的长度，不存在返回 -1

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
// 时间复杂度过高！！！

// 从0出发，广度遍历，标记已经访问的点，访问到已经访问的点停止
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const answer1 = getOneAnswer(n, [0], [], redEdges, blueEdges);
  const answer2 = getOneAnswer(n, [], [0], redEdges, blueEdges);
  const answer = new Array(n).fill(-1);
  for (let i = 0; i < answer.length; i++) {
    if (answer1[i] !== -1 && answer2[i] !== -1) {
      answer[i] = Math.min(answer1[i], answer2[i]);
    } else {
      answer[i] = Math.max(answer1[i], answer2[i]);
    }
  }
  return answer;
};

var getOneAnswer = function (n, nextRed, nextBlue, redEdges, blueEdges) {
  const answer = new Array(n).fill(-1);
  let count = 0;
  answer[0] = 0;
  while (
    count < redEdges.length + blueEdges.length &&
    (nextBlue.length || nextRed.length)
    && answer.indexOf(-1) !== -1
  ) {
    if(nextRed.length){
        count++;
    }
    while (nextRed.length) {
      const curNode = nextRed.shift();
      for (edge of redEdges) {
        if (edge[0] === curNode) {
          nextBlue.push(edge[1]);
          if (answer[edge[1]] === -1) {
            answer[edge[1]] = count;
          }
        }
      }
    }
    if(nextBlue.length){
        count++;
    }
    while (nextBlue.length) {
      const curNode = nextBlue.shift();
      for (edge of blueEdges) {
        if (edge[0] === curNode) {
          nextRed.push(edge[1]);
          if (answer[edge[1]] === -1) {
            answer[edge[1]] = count;
          }
        }
      }
    }
  }
  return answer;
};
let n = 8;
const red_edges = [[4,6],[4,0],[1,1],[7,6],[1,0],[3,3],[6,6],[4,1],[0,5]]
const blue_edges =[[0,1],[1,4],[0,0],[0,4],[6,4],[6,6],[2,4],[3,3]]
console.log(shortestAlternatingPaths(n, red_edges, blue_edges));
