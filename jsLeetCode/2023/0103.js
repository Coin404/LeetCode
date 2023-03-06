// 2042 检查句子中的数字是否递增
// 句子是由若干token组成的一个列表，token间用单个空格分隔，句子没有前导或尾随空格。
// 每一个token要么是一个由数字0-9组成的不含前导零的正整数，要么是一个由小写字母组成的单词


/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const arr = s.split(' ')
    let now =0
    for(let i = 0;i<arr.length;i++){
        if(Number(arr[i])){
            if(Number(arr[i] <= now)){
                return false
            }else{
                now = Number(arr[i])
            }
        }
    }
    return true
};

let s = "hello world 5 x 9"
console.log(areNumbersAscending(s))