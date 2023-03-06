// 946 验证栈序列
// 给定pushed和popped两个序列，每个序列中的值都不重复，
// 只有当他们可能是在最初空栈上进行的推入push弹出pop操作序列的结果，返回ture

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    const stack = []
    let pushN = 0
    let popN = 0
    stack.push(pushed[pushN++])
    while(popN <= popped.length && pushN <= pushed.length){
        const cur = stack.pop()
        if(cur == popped[popN]){
            popN++
        }else{
            // 如果不相等，原先的不出栈，继续推
            stack.push(cur)
            stack.push(pushed[pushN++])
        }
    }
    if(stack.length){ 
        return false
    }
    return true
};

console.log(validateStackSequences(
    [1,2,3,4,5],
    [4,5,3,2,1]
))