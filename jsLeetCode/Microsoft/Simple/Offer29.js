// 顺时针打印矩阵
// 输入一个矩阵，按照从外向里以顺时针的顺序一次打印出每一个数字

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 64ms
// 44。6MB
 var spiralOrder = function(matrix) {

    if( matrix.length == 0 || matrix[0].length == 0){
        return []
    }

    const ans = []
    const rows = matrix.length
    const column = matrix[0].length
    // 按照到边界的距离切分遍历
    let left = 0 , right=column-1
    let top = 0, bottom = rows-1
    while( top <= bottom && left <= right){
        // 一轮循环
        for(let i = left;i<=right;i++){
            // 上数组
            ans.push(matrix[top][i])
        }
        for(let i = top+1;i<=bottom;i++){
            // 右数组
            ans.push(matrix[i][right])
        }
        for(let i = right-1;i>=left && bottom!=top;i--){
            // 下数组
            ans.push(matrix[bottom][i])
        }
        for(let i = bottom-1;i>top && left!=right;i--){
            // 左数组
            ans.push(matrix[i][left])
        }
        // 更改边界
        left++
        top++
        bottom--
        right--
    }
    return ans
};

const matrix1 =[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix1))