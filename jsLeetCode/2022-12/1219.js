// 1971 寻找图中是否存在路径
// 一个具有n个顶点的双向图，其中每个顶点标记从0到 n-1 
// 图中的边用一个二维整数数组edges表示
// 请确认是否存在从顶点source开始到顶点 destination 结束

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // 得到边表
    const adj = new Array(n).fill(0).map(()=>new Array())
    for(const edge of edges){
        const x = edge[0],y=edge[1]
        adj[x].push(y)
        adj[y].push(x)
    }
    // 标记数组
    const visited = new Array(n).fill(0)
    
    // 广度遍历
    const queue = [source]
    visited[source] = true
    while(queue.length){
        const v = queue.shift()
        if(v == destination){
            return true
        }
        for(const next of adj[v]){
            if(!visited[next]){
                queue.push(next)
                visited[next] = true
            }
        }
    }
    return visited[destination]

    // 深度遍历
    return dfs(source,destination,adj,visited)
};


// 深度遍历
const dfs = (source,destination,adj,visited)=>{
    if(source == destination){
        return true
    }
    visited[source] = true
    for(const next of adj[source]){
        if(!visited[next] && dfs(next,destination,adj,visited))
        {
            return true
        }
    }
    return false
}