// 2024 考试的最大困扰度

// T F组成， 最大化有连续相同结果的题数
// 给定一个字符串answerKey   给定一个整数K  表示能进行的最多次数
// 返回不超过K次操作的情况下，最大连续T或者F

/**
/ * @param {string} answerKey
/ * @param {number} k
/ * @return {number}
 */


// 滑动窗口
// 从左往后维护同一个字符的最大长度，到达极限位置后记录
// 右移一个窗口，如果腾出来的是另一个字符

// "FTFFTFTFTTFTTFTTFFTTFFTTTTTFTTTFTFFTTFFFFFTTTTFTTTTTTTTTFTTFFTTFTFFTTTFFFFFTTTFFTTTTFTFTFFTTFTTTTTTF"
// 32
//   84   / 43.8
var maxConsecutiveAnswers = function(answerKey, k) {
    return Math.max(getMax(answerKey,k,'T'),getMax(answerKey,k,'F'))
};
function getMax(string,k,str){
    let left=0,right = 0
    let max=0,sum = 0
    while(right < string.length)
    {   
        // 是相同字符，直接加入
        if(string[right]===str){
            sum++
            max=Math.max(max,sum)
            right++
        } else if(k>0){
            // 不是相同字符，但是可以变字符
            sum++
            max=Math.max(max,sum)
            k--
            right++
        } else{
            // 不是相同的字符，同时也没用办法变更字符
            // 如果相同，k不变直接左移
            if(string[left] === str) {
                left++
                sum--
            } else{
                left++
                right++
            }
        }
    }
    return max
}

const str = "FTFFTFTFTTFTTFTTFFTTFFTTTTTFTTTFTFFTTFFFFFTTTTFTTTTTTTTTFTTFFTTFTFFTTTFFFFFTTTFFTTTTFTFTFFTTFTTTTTTF"
const k = 32
console.log(maxConsecutiveAnswers(str,k));


//  76   / 44·3
var maxConsecutiveAnswers1 = function(answerKey, k) {
    return Math.max(getMax1(answerKey,k,'T'),getMax1(answerKey,k,'F'))
};
function getMax1(string,k,str){
    let left=0,right = 0
    let max=0
    while(right < string.length)
    {   
        // 是相同字符，直接加入
        if(string[right]===str){
            max=Math.max(max,right-left+1)
            right++
        } else if(k>0){
            // 不是相同字符，但是可以变字符
            max=Math.max(max,right-left+1)
            k--
            right++
        } else{
            // 不是相同的字符，同时也没用办法变更字符
            // 如果相同，k不变直接左移
            if(string[left] === str) {
                left++
            } else{
                left++
                right++
            }
        }
    }
    return max
}