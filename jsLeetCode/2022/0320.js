// 2039 网络空闲的时刻
// 给定一个N服务器的计算机网络，给定一个二维整数数组edges
// edges[i] =[ui,vi] 表示两者之间有一条信息通路，一秒内可以传输任意数据的信息
// 给定一个长度为N且下标从0开始的整数数组patience
// 所有服务器相通，0为主服务器，其余为数据服务器，每个数据服务器都要向主服务器发送信息
// 信息再服务器之间按照最优线路传输，主服务器处理所有信息立即按照每条信息路线反方向回复
// 0秒开始，所有数据服务器发送各自需要处理的数据，1秒开始，每一秒最开始的时候数据服务器检查是否收到了回复信息
// 如果还没受到任何回复消息，周期性重发信息，数据服务器i每patience[i]重发信息
// 当没有任何信息在线路上传输的时候空闲

/**
/ * @param {number[][]} edges
/ * @param {number[]} patience
/ * @return {number}
 */

// 超时！
 var networkBecomesIdle = function(edges, patience) {
    // 记录是否进行过遍历
    const node = new Set()
    // 栈,进行广度遍历
    const list = [0]
    node.add(0)
    let path = new Array(patience.length).fill(0)
    // 表示当前所在层级
    let num = 1
    // 双指针控制层级
    let left = 0
    let right = 0
    let max = 0
    while(list.length < patience.length) {
        let v = list[left]
        for(let i = 0 ;i<edges.length; i++) {
            // 循环所有的边
            // 起始节点为v,那么就判断所连接的另一条边
            if(edges[i][0] === v) {
                // 如果另一条边没加入Set中
                if(!node.has(edges[i][1])){
                    list.push(edges[i][1])
                    node.add(edges[i][1])
                    path[edges[i][1]] = num
                    max = Max(edges[i][1],max)
                    // 每次找到一条边就进行一次删除
                    edges.splice(i,1)
                    i--
                }
            }
            else if(edges[i][1] === v) {
                // 如果另一条边没加入Set中
                if(!node.has(edges[i][0])){
                    list.push(edges[i][0])
                    node.add(edges[i][0])
                    path[edges[i][0]] = num
                    max = Max(edges[i][0],max)
                    edges.splice(i,1)
                    i--
                }
            }
        }
        if(left === right) {
            num ++
            right = list.length-1
        }
        left++
    }
    // console.log(path)
    // console.log(patience)
    // 处理消息，保存一个Max
    function Max(j,max){
        if( patience[j] >= 2 * path[j]) {
            if( 2 * path[j]+1 > max) {
                max = 2 * path[j] +1
            } 
        } else {
            const pass = Math.floor((2*path[j] -1)  /patience[j])
            const time =(pass * patience[j] ) + 2* path[j] +1
            if( time > max) {
                max = time
            } 
        }
        return max
    }
    return max
};


const edges = 
[[0,5],[5,2],[0,3],[0,7],[2,1],[4,9],[0,10],[2,9],[2,6],[3,8],[10,1],[0,4],[7,6]]
const patience = [0,7,9,1,1,1,4,1,9,8,1]
const max = networkBecomesIdle(edges,patience)
console.log(max)