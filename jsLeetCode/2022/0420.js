// 388 文件的最长绝对路径

/**
 * @param {string} input
 * @return {number}
 */


// 栈
//  记录当前深度  通过/t判断深度层级，只有大于当前层级才能入栈
//  否则退栈直至当前层级大于站内层级
//  每层只需要记录当前的栈长度
//  栈内维护的数据为，当前层的长度

//  特殊情况，根目录中任何东西的绝对路径都是名称本身
// 输入：input = "file1.txt\nfile2.txt\nlongfile.txt"
// 输出：12
 var lengthLongestPath = function(input) {
    const stack = []
    const n =input.length
    let ans =0
    let pos = 0
    
    while(pos < n){
        let depth = 1
        //  \t 记录层级
        while(pos < n && input[pos] == '\t'){
            pos++
            depth++
        }

        // 统计当前长度，并且判断文件
        let isFile =false
        let len = 0
        while(pos < n && input[pos] != '\n'){
            if(input[pos] === '.'){
                isFile = true
            }
            len++
            pos++
        }

        // 换行符跳过
        pos++

        // 栈处理,同级或者高一级，原本的需要退栈
        while(stack.length >= depth){
            stack.pop()
        }
        if(stack.length){
            // 如果栈内有元素，长度为当前Len 加上栈内最后一位 加上斜杠
            len += stack[stack.length-1] + 1
        }
        if(isFile){
            ans = Math.max(ans,len)
        } else{
            stack.push(len)
        }
    }
    return ans
};

const input ="dirrrrr\n\ta.r"
console.log(lengthLongestPath(input))