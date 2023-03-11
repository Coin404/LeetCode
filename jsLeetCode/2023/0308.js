// 2379 得到 k 个黑块的最小涂色次数
// 给定一个长度为 n 下标从 0 开始的字符串 blocks，blocks[i] 要么是 ‘W’ 要么是 ‘B’
// 表示白色和黑色
// 给一个整数k，表示想要连续黑色色块的数目，每一次操作一个选一个白色涂成黑色
// 返回至少出现一次连续k个黑色色块的数目

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */


// 维护一个长度为 k 的滑动窗口，记录其中白色的数量
// 返回白色数量的最小值
var minimumRecolors = function(blocks, k) {
    let ans = Number.MAX_VALUE
    let countWrite = 0
    for(let i =0;i<k;i++){
        if(blocks[i] == 'W'){
            countWrite+=1
        }
    }
    ans = countWrite
    for(let i=k;i<blocks.length;i++){
        if(blocks[i] =='W' && blocks[i-k]=='B'){
            countWrite+=1
        }else if(blocks[i] =='B' && blocks[i-k]=='W'){
            countWrite-=1
        }
        ans = Math.min(ans,countWrite)
    }
    return ans
};

blocks ="WBBWWBBWBW"
console.log(minimumRecolors(blocks,7))