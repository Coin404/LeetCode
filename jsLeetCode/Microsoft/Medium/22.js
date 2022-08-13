// 括号生成

/**
 * @param {number} n
 * @return {string[]}
 */
// 数字n代表生成括号的对数，请你设计一个函数，用于能够生成所有的可能的并且有效的括号组合
// 56ms
// 42.4MB
 var generateParenthesis = function(n) {
    const ans = []
    const parenthesesArr = ""
    parentheses(ans,parenthesesArr,n,n,'(')
    return ans
};

var parentheses = function(ans,parenthesesArr,left,right,parenthesesStr){
    // 剩下的左括号多，不合法
    if(left > right){
        return null
    }
    // 括号插入
    parenthesesArr+=parenthesesStr
    if(parenthesesStr == ')'){
        right--
    }else{
        left--
    }
    if(left < 0 || right <0){
        return null
    }
    if(left == 0 && right == 0){
        ans.push(parenthesesArr)
        return null
    }
    parentheses(ans,parenthesesArr,left,right,'(')
    parentheses(ans,parenthesesArr,left,right,')')
}

console.log(generateParenthesis(3))