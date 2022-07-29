// 464 我能赢吗
// 先到100的玩家获胜
// 整数池不能重复使用整数
// 给定两个整数  可选的最大数  和累计和
// 先出手的玩家能否稳赢返回true,否则返回false
// 假设两者表现都最佳

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
 var canIWin = function(maxChoosableInteger, desiredTotal) {
    //  哈希map。用来记录哪些数访问过了
    const memo = new Map();
    // 记忆搜索
    const dfs = (maxChoosableInteger, usedNumbers, desiredTotal, currentTotal) => {
        // 如果没有玩过这个场景
        if (!memo.has(usedNumbers)) {
            let res = false;
            // 循环遍历每个数的情况，如果都赢不了就是输了
            for (let i = 0; i < maxChoosableInteger; i++) {
                // 判断i+1是不是被访问了
                if (((usedNumbers >> i) & 1) === 0) {
                    // 选完直接胜利，结果为true
                    if (i + 1 + currentTotal >= desiredTotal) {
                        res = true;
                        break;
                    }
                    // 否则的话递归判断，我选完后对面选完是不是就输了
                    if (!dfs(maxChoosableInteger, usedNumbers | (1 << i), desiredTotal, currentTotal + i + 1)) {
                        res = true;
                        break;
                    }
                }
            }
            // 结果存入记忆优化
            memo.set(usedNumbers, res);
        }
        return memo.get(usedNumbers);
    }
    // 如果全部都不能赢。没必要比赛
    if ((1 + maxChoosableInteger) * (maxChoosableInteger) / 2 < desiredTotal) {
        return false;
    }
    return dfs(maxChoosableInteger, 0, desiredTotal, 0);
};

// 初始为 0000000000000
//  0000000001 表示 1已经访问 
//  0000000011 表示 1，2已经访问
// (usedNumbers >> i) & 1) 用位数来标记访问过与否 ，移位相与
// usedNumbers | (1 << i) 将第i+1位标记为1，先移位再或