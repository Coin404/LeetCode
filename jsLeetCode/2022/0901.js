// 1475 商品折扣后的最终价格
// 给你一个数组prices,其中prices[i]是商品里第i件商品的价格。
// 商品里正在进行促销活动，如果你要买第i件商品，那么你可以得到与prices[j]相等的折扣
// 其中j是满足j>i且prices[j] <= prices[i]的最小下标，如果没有满足条件的j,你将没有任何折扣
// 返回一个数组，数组中第i个元素是你折扣后购买商品i最终需要支付的价格

/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 64ms
// 41.7MB
 var finalPrices = function(prices) {
    for(let i =0;i<prices.length;i++){
        for(let j = i+1;j<prices.length;j++){
            if(prices[j] <= prices[i]){
                prices[i] = prices[i]-prices[j]
                break
            }
        }
    }
    return prices
};

// 单调栈，本质上为找到右侧第一个小于他的元素
// 64ms
// 42.6MB
var finalPrices2 = function(prices){
    const stack = []
    const n = prices.length
    for(let i = 0;i<n;i++){
        // 遇到第一个比栈顶大的就开始退栈记录
        while(stack.length && prices[stack[stack.length-1]]>= prices[i]){
            const j = stack.pop()
            prices[j] = prices[j] - prices[i]
        }
        stack.push(i)
    }
    return prices
}