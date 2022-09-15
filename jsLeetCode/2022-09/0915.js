// 672 灯泡开关 2
// 房间中有n只已经打开的灯泡，编号从1到n,墙上挂着四个开关
// 这4个开关各自都具有不同的功能
//  1: 反转当前所有灯的状态
//  2：反转编号为偶数的灯的状态
//  3：反转编号为奇数的灯的状态
//  4：反转编号为 j = 3k+1的灯 （1，4，7...）
// 你必须恰好按压开关presses次，每次选一个按压
// 给定 n和press 执行完所有的按压之后，返回不同可能的状态数量

/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
// 周期为6，分为四组
//  6k+1   1 3 4
// 6k+2 6k+6  1 2
// 6k+3 6k+6  1 3
// 6k+4       1 2 4
var flipLights = function(n, presses) {
    const seen = new Set();
    for (let i = 0; i < 1 << 4; i++) {
        const pressArr = new Array(4).fill(0);
        for (let j = 0; j < 4; j++) {
            pressArr[j] = (i >> j) & 1;
        }
        const sum = _.sum(pressArr);
        if (sum % 2 === presses % 2 && sum <= presses) {
            let status = pressArr[0] ^ pressArr[1] ^ pressArr[3];
            if (n >= 2) {
                status |= (pressArr[0] ^ pressArr[1]) << 1;
            }
            if (n >= 3) {
                status |= (pressArr[0] ^ pressArr[2]) << 2;
            }
            if (n >= 4) {
                status |= (pressArr[0] ^ pressArr[1] ^ pressArr[3]) << 3;
            }
            seen.add(status);
        }
    }
    return seen.size;
};
