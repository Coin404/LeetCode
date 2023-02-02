var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    // 二维数组 next0 1表示不同颜色
    const next = new Array(2).fill(0).map(() => new Array(n).fill(0).map(() => new Array()));
    // 处理next边数组 0表示接下来是红色
    for (const edge of redEdges) {
        next[0][edge[0]].push(edge[1]);
    }
    for (const edge of blueEdges) {
        next[1][edge[0]].push(edge[1]);
    }
  
    // 两种类型的颜色最短路径的长度
    const dist = new Array(2).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE)); 
    const queue = [];
    // 初始化
    dist[0][0] = 0;
    dist[1][0] = 0;
    // 第一位表示 结点，第二位表示接下来的颜色
    queue.push([0, 0]);
    queue.push([0, 1]);
    while (queue.length) {
        const pair = queue.shift();
        let x = pair[0], t = pair[1];
        // 遍历当前结点期待色
        for (const y of next[1 - t][x]) {
            // 如果访问过了，跳过
            if (dist[1 - t][y] !== Number.MAX_VALUE) {
                continue;
            }
            // 没有访问甚至一下距离，为从前一个过来的+1
            dist[1 - t][y] = dist[t][x] + 1;
            // 推入当前节点和期待的颜色
            queue.push([y, 1 - t]);
        }
    }

    // 通过两个的路径数组处理得到answer
    const answer = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        answer[i] = Math.min(dist[0][i], dist[1][i]);
        if (answer[i] === Number.MAX_VALUE) {
            answer[i] = -1;
        }
    }
    return answer;
};
let n = 8;
const red_edges = [[4,6],[4,0],[1,1],[7,6],[1,0],[3,3],[6,6],[4,1],[0,5]]
const blue_edges =[[0,1],[1,4],[0,0],[0,4],[6,4],[6,6],[2,4],[3,3]]
console.log(shortestAlternatingPaths(n, red_edges, blue_edges));
