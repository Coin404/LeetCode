//矩阵中的幸运数  矩阵中数字各不相同，任意顺序返回幸运数字
//1380
//同一行中最小的，同一列中最大的
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const answer = [];
    const minRow = new Array(m).fill(Number.MAX_SAFE_INTEGER);
    const maxCol = new Array(n).fill(0);
    //遍历矩阵得到行最小，列最大
    for(let i = 0; i < m ;i++){
        for(let j = 0 ; j < n;j++){
            minRow[i] = Math.min(minRow[i], matrix[i][j]);
            maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
        }
    }
    //判断两个数组中是否有相同的数字
    console.log(minRow);
    console.log(maxCol);
    for (let i = 0; i < maxCol.length; i++) {
        for (let j = 0; j < minRow.length; j++) {
            if (maxCol[i] === minRow[j]) {
                answer.push (maxCol[i]);
            }
        }
    }
    return answer;
};


//所有数字都不同，直接找出行最小和列最大，如果这个结果有同一个数就是这个数

//幸运数答案其实只有0 / 1 如果存在一定是所有最小值中的最大值

var luckyNumbers1  = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const answer = [];
    const minRow = new Array(m).fill(Number.MAX_SAFE_INTEGER);
    const maxCol = new Array(n).fill(0);
    for(let i = 0; i < m ;i++){
        for(let j = 0 ; j < n;j++){
            minRow[i] = Math.min(minRow[i], matrix[i][j]);
            maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
        }
    }
    // console.log(minRow);
    // console.log(maxCol);
    // console.log(Math.max.apply(null,minRow));
    // console.log(Math.min.apply(null,maxCol));
    const maxMin = Math.max.apply(null,minRow);
    const minMax = Math.min.apply(null,maxCol);
    if( maxMin === minMax)
    {
        answer.push(maxMin);
    }
    return answer;
};

let matrix = [[3,7,8],[9,11,13],[15,16,17]]
let answer = luckyNumbers1(matrix);
console.log(answer);


//56ms的范例，行遍历，列遍历设置是否是最大值/最小值
var luckyNumbers  = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const ret = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let isMin = true, isMax = true;
            for (let k = 0; k < n; k++) {
                if (matrix[i][k] < matrix[i][j]) {
                    isMin = false;
                    break;
                }
            }
            for (let k = 0; k < m; k++) {
                if (matrix[k][j] > matrix[i][j]) {
                    isMax = false;
                    break;
                }
            }
            if (isMin && isMax) {
                ret.push(matrix[i][j]);
            }
        }
    }
    return ret;
};