//1791  找出星型图的中心节点
//编号 1 -n  有一个中心节点，恰有n-1条边将中心节点与其他每个节点连接起来



/**
 * @param {number[][]} edges
 * @return {number}
 */
//因为其他边都与中心节点相连，本质上就是找数组中的相同节点
 var findCenter = function(edges) {
    //在边1和边2之间找共同点
    return edges[0][0] == edges[1][0] || edges[0][0]== edges[1][1] ? edges[0][0] : edges[0][1] ;
};