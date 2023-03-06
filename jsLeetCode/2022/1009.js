// 括号的分数 856
// 给定一个平衡括号字符串S，按下述规则计算该字符串的分数
// （）一分
// （A） 2*A的分数
// AB 得A+B的分数


/**
 * @param {string} s
 * @return {number}
 */

// 62ms
// 41MB
// 入栈
// 遇到）开始出栈，记录当前数字
 var scoreOfParentheses = function(s) {
    const stack = []
    let top = -1
    let ans = 0
    for(let i=0;i<s.length;i++){
        if(s[i] != ')'){
            stack[++top] = s[i]
        }
        // 退栈
        if(s[i] == ')'){
            let num = 0
            while(stack[top] != '('){
                num += stack[top--]
            }
            if(num == 0){
                num =1
            }else{
                num = 2*num
            }
            stack[top] = num
        }
    }
    while(top != -1 ){
        ans += stack[top--]
    }
    return ans
};

a = '()'
console.log(scoreOfParentheses(a))