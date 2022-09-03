// 最长回文字串

/**
 * @param {string} 
 * @return {string}
 */
// 找到所有相邻的位置，向外扩散，寻找最长的
// 60ms
// 43.7MB
var longestPalindrome = function(s) {
    const len = s.length
    const center = []
    let max = 0
    let start = 0
    let end = 0
    // 栈中推入所有可能的解
    for(let i = 0 ;i < len-1;i++){
        if(s[i] == s[i+1]){
            center.push([i,i+1])
        }
        if(s[i] ==s[i+2]){
             center.push([i,i+2])
        }
    }
    // 向两侧遍历，直到不符合回文字符串出队
    while(center.length){
        let left = center.pop()
        let right = left[1]
        left = left[0]
        while(left >= 0 && right <= len-1 && s[right] == s[left]){
            left--
            right++
        }
        if((--right)-(++left)+ 1 > max){
            max = right-left+1
            start = left
            end = right
        }
    }
    return s.slice(start,end+1)
};

console.log(longestPalindrome("babad"))