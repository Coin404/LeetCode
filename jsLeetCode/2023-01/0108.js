// 2185 统计包含给定前缀的字符串
// 给你一个字符串数组words和一个字符串pref
// 返回words中以pref作为前缀的字符串的数目

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count =0
    for(let i = 0;i<words.length;i++){
        if(words[i].substring(0,pref.length) == pref){
            count++
        }
    }
    return count
};