// 字典序的第K小数字
// 给定整数n和k，返回 [1,n] 中字典序第k小的数字

// 输入: n = 13, k = 2
// 输出: 10
// 解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。


/**
/ * @param {number} n
/ * @param {number} k
/ * @return {number}
 */
var findKthNumber = function(n, k) {
    // 从一开始
    let curr = 1
    // 如果k=1,则不进去下面的循环，直接返回1
    k--
    while( k > 0 ) {
        const steps = count(curr,n)
        // 不够，去邻居节点处理
        if(steps <= k) {
            k -= steps
            curr++
        } else {
            // 说明在其子节点中 
            curr = curr * 10
            k--
        }
    }
    return curr
};
const count = ((curr,n) => {
    let steps = 0;
    let first = curr;
    let last = curr;
    while( first <= n) {
        // 汇入当前的步长
        steps += Math.min(last, n) - first + 1;
        // 进去下一层
        first = first * 10;
        last = last*10 + 9
    }
    return steps
}) 
