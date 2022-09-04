// 1582 二进制矩阵中的特殊位置
// 给定一个大小为 rows * clos的矩阵 mat 其中 mat[i][j]是0或者1
// 请返回矩阵正特殊位置的数目
// 特殊位置定义：如果mat[i][j] == 1并且第i行和第j列中的所有其他元素均为0

/**
 * @param {number[][]} mat
 * @return {number}
 */

// 用两个数组表示哪些行列已经出现过1
var numSpecial = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    const colsArr = new Array(cols).fill(0)
    const rowsArr = new Array(rows).fill(0)
    let ans = 0
    for(let i = 0 ;i < rows;i++){
        for(let j = 0 ; j <cols;j++){
            if(mat[i][j] == 1){
                rowsArr[i]+=1
                colsArr[j]+=1
            }
        }
    }
    // console.log(rowsArr)
    // console.log(colsArr)
    for(let i = 0 ;i < rows;i++){
        // console.log(rowsArr[i])
        if(rowsArr[i] != 1){
            continue
        }
        for(let j = 0 ; j <cols;j++){
            // console.log(colsArr[j])
            if(colsArr[j] != 1){
                continue
            }
            if(mat[i][j] == 1){
                ans+=1
            }
        }
    }
    return ans
};

const arr = [[0,0,0,0,0],[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]
console.log(numSpecial(arr))