// 螺旋矩阵
// 给你一个m行n列的矩阵matrix，请按照顺时针螺旋顺序，返回矩阵中的所有元素

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 52ms
// 41MB
 var spiralOrder = function(matrix) {
    const ans = []
    const rows = matrix.length
    const cols = matrix[0].length
    let rowH = 0
    let rowL = rows-1
    let colL = 0
    let colR = cols-1
    while(rowH <= rowL  && colL <= colR){
        // ->
        for(let i = colL;i <= colR;i++){
            ans.push(matrix[rowH][i])
        }
        // !^
        for(let i = rowH+1 ; i <=  rowL ;i++ ){
            ans.push(matrix[i][colR])
        }
        //  <- 去除重复扫描
        for(let i = colR-1;i>= colL && rowH != rowL;i--){
            ans.push(matrix[rowL][i])
        }
        // ^    去除重复扫描
        for(let i = rowL-1 ; i > rowH && colL != colR;i--){
            ans.push(matrix[i][colL])
        }
        colL++
        colR--
        rowH++
        rowL--
    }
    return ans
};

matrix =[[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(matrix))