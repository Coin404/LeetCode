// 1801 积压订单中的订单总数
// 给你一个二维整数数组orders，其中每个 orders[i] = [ pricei,amounti,orderType]表示有amounti闭类型为orderTypei，价格为pricei的订单
// 订单类型orderType i     - 0表示采购订单 buy  - 1表示销售订单sell
// 对于所有的orders[i] 表示所有的订单提交时间均遭遇 orders[i+1]
// 返回积压订单
// -如果该订单是一批采购订单buy,查看积压订单中价格最低的销售订单sell，如果<=当前采购，则匹配删除，否则定都订单添加到积压订单
// -反之大于
// 结果对 10^9+7 取余

/**
 * @param {number[][]} orders
 * @return {number}
 */
// 销售订单构造小根堆 购买订单构造大根堆
// 每次出现订单先处理最顶部的订单，清空了从左右孩子节点向上
// 遍历完数组计算两个堆中的所有数目
// （数列也一样）

// 堆的构造插入 堆顶部的删除
var getNumberOfBacklogOrders = function (orders) {
  const buyList = [];
  const sellList = [];
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    // 采购订单
    if (orders[i][2] == 0) {
      // 匹配能符合的销售订单
      if (sellList.length) {
        // 订单未清空继续往前走
        while (
          orders[i][1] > 0 &&
          sellList.length &&
          sellList[0][0] <= orders[i][0]
        ) {
          // 如果销售订单够减
          if (sellList[0][1] > orders[i][1]) {
            sellList[0][1] -= orders[i][1];
            sum -= orders[i][1];
            sum = (sum + 1000000007) % 1000000007;
            orders[i][1] = 0;
          } else {
            orders[i][1] -= sellList[0][1];
            sum -= sellList[0][1];
            sum = (sum + 1000000007) % 1000000007;
            sellList.shift();
          }
        }
      }
      if (orders[i][1] > 0) {
        // 匹配不上加入采购数组 由大到小
        if (buyList.length == 0) {
          buyList.push(orders[i]);
        }
        for (let j = 0; j < buyList.length; j++) {
          if (buyList[j][0] < orders[i][0]) {
            buyList.splice(j, 0, orders[i]);
            break;
          }
          if(j== buyList.length-1 && buyList[j][0]>orders[i][0]){
            buyList.push(orders[i]);
          }
        }
        sum += orders[i][1];
        sum = (sum + 1000000007) % 1000000007;
      }
    }
    // 销售订单
    else {
      // 匹配能符合的订购订单
      if (buyList.length) {
        // 订单未清空继续往前走
        while (
          orders[i][1] > 0 &&
          buyList.length &&
          buyList[0][0] >= orders[i][0]
        ) {
          if (buyList[0][1] > orders[i][1]) {
            buyList[0][1] -= orders[i][1];
            sum -= orders[i][1];
            sum = (sum + 1000000007) % 1000000007;
            orders[i][1] = 0;
          } else {
            orders[i][1] -= buyList[0][1];
            sum -= buyList[0][1];
            sum = (sum + 1000000007) % 1000000007;
            buyList.shift();
          }
        }
      }
      if (orders[i][1] > 0) {
        if (sellList.length == 0) {
          sellList.push(orders[i]);
        }

        // 匹配不上加入销售数组 由小到大
        for (let j = 0; j < sellList.length; j++) {
          if (sellList[j][0] > orders[i][0]) {
            sellList.splice(j, 0, orders[i]);
            break;
          }
          if(j== sellList.length-1 && sellList[j][0]<orders[i][0]){
            sellList.push(orders[i]);
          }
        }
        sum += orders[i][1];
        sum = (sum + 1000000007) % 1000000007;
      }
    }
  }
  return sum;
};

let orders =[[26,7,0],[16,1,1],[14,20,0],[23,15,1],[24,26,0],[19,4,1],[1,1,0]]
console.log(getNumberOfBacklogOrders(orders));
