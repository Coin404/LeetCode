// 901 股票价格跨度
// 编写一个StockSpanner类，它收集某些股票的每日报价，并返回该股票当日价格的跨度
// 股票的跨度被定义为股票价格小于或等于今天价格的最大连续日数，从今天开始往回，包括今天



// 单调栈
var StockSpanner = function() {
    this.stack = []
    this.stack.push([-1,Number.MAX_VALUE])
    this.idx = -1
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.idx++;
    // 栈内小于等于新的，出栈
    while(price >= this.stack[this.stack.length - 1][1]){
        this.stack.pop()
    }
    let ans = this.idx - this.stack[this.stack.length - 1][0]
    this.stack.push([this.idx,price])
    return ans
};