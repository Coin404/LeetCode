// 944 删列造序
// 给你由n个小写字母字符串组成的数组strs，其中每个字符串长度相等
// 这些字符串可以每个一行排成一个网格。
// 找出并且删除不是按照字典序升序排列的列

/**
 * @param {string[]} strs
 * @return {number}
 */
// 68ms
var minDeletionSize = function (strs) {
    const row = strs.length;
    const col = strs[0].length;
    let ans = 0;
    for (let j = 0; j < col; ++j) {
        for (let i = 1; i < row; ++i) {
            if (strs[i - 1][j] > strs[i][j]) {
                ans++;
                break;
            }
        }
    }
    return ans;
};

const a = ["zyx", "wvu", "tsr"]
console.log(minDeletionSize(a))