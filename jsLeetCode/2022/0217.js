//骑士在棋盘上的概率  688
//n*n的棋盘，k次移动之后还停在棋盘上的概率 起始位置（row,column）
//每次移动只有八种走法，每次移动是向上两个单元格，正交方向上一个单元格
//k步之后或者离开棋盘就停止
//如果0步返回1
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */

//dp[i][j][step] 表示i，j出发走了step步数之后在棋盘内的概率
//dp[i][j][0]  = 1
//i,j 不在棋盘上时候 = 0
//dp[i][j][step] = 1/8 求和 dp[i+di][j+di][step-1]
//某一点的概率是八个方向走到走到里的概率之和/8
 var knightProbability = function(n, k, row, column) {
    const dirs = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]];
    const dp = new Array(n).fill(0).map(()=>new Array(n).fill(0).map(()=>new Array(k+1).fill(0)));
    for (let step = 0; step <= k; step++) {
        for(let i = 0 ;i< n ;i++)
        {
            for(let j = 0;j < n ;j++)
            {
                if(step == 0){
                    dp[i][j][step] = 1;
                }
                else{
                    for(const dir of dirs){
                        //检索数组要用of出来的才是数字类型
                        // console.log(dir[0] + ' ' + dir[1]);
                        const ni = i + dir[0];
                        const nj = j + dir[1];
                        // console.log(ni + ' ' +nj);
                        if(ni >= 0 && nj >=0 && ni < n && nj < n){
                            dp[i][j][step] += dp[ni][nj][step-1] /8;
                        }
                    }
                }
            // console.log(dp[i][j][step]);
            }
        }
    }
    return dp[row][column][k];
};

const answer = knightProbability(3,2,0,0);
console.log(answer);