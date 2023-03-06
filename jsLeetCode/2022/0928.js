// 第k个数
// 有些数的素因子只有3 5 7 请设计一个算法找出第k个数
// 不是必须有这些素因子，而是必须不包含其他的素因子

var getKthMagicNumber = function(k) {
    const dp = new Array(k + 1).fill(0);
    dp[1] = 1;
    let p3 = 1, p5 = 1, p7 = 1;
    for (let i = 2; i <= k; i++) {
        const num3 = dp[p3] * 3, num5 = dp[p5] * 5, num7 = dp[p7] * 7;
        dp[i] = Math.min(Math.min(num3, num5), num7);
        if (dp[i] === num3) {
            p3++;
        }
        if (dp[i] === num5) {
            p5++;
        }
        if (dp[i] === num7) {
            p7++;
        }
    }
    return dp[k];
};
