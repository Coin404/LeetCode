// 2315 统计星号
// 给你一个字符串s，每两个连续竖线 ‘｜’为一对，换言之，第一个和第二个’｜‘为一对
// 返回不在竖线对之间 S的’*‘数目

/**
 * @param {string} s
 * @return {number}
 */
// 一次遍历
// 建立栈  遇到｜栈空入栈，栈有出栈，遇到星号，栈空+1
var countAsterisks = function(s) {
    let ans = 0
    // flag=1 为空
    let flag = true
    for(let i = 0;i<s.length;i++){
        if(s[i]=='*' && flag){
            ++ans
        }else if(s[i] == '|'){
            flag = !flag
        }
    }
    return ans
};

s = "l|*e*et|c**o|*de|"
console.log(countAsterisks(s))