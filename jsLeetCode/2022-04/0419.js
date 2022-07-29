// 字符的最短距离

// 给定 answer  s  c  c是s中出现的字符
// amswer.length == s.length且 answer[i]是s中从下标i到离他最近的c的距离

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */


// 暴力，找到左右c的位置，遍历判断
 
// 两次遍历
// s到其左侧最近c的距离
// s到其右侧最近的c的距离
var shortestToChar = function(s, c) {
    const n = s.length;
    const ans = new Array(n).fill(0);

    // 左往右遍历，其实参数为-n
    let indexc = -n;
    for(let i =0;i<n;i++){
        if(c === s[i]){
            indexc = i
        }
        ans[i] = i - indexc 
    }
    indexc = 2*n
    // 右往左
    for(let i= n-1;i>=0;i--){
        if(c === s[i]){
            indexc = i 
            console.log(indexc)
        }
        ans[i] = (indexc - i ) < ans[i] ? (indexc - i):ans[i];
    }
    return ans;
};

let s = "loveleetcode"
let c = 'e'
console.log(shortestToChar(s,c))
