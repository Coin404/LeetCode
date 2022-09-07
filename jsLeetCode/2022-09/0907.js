// 1592 重新排列单词间的空格
// 给你一个字符串text，该字符串由若干被空格包围的单词组成，每个单词由一个或多个小写英文字母组成
// 并且两个单词之间至少存在一个空格。
// 请你重新排列空格，使每对相邻单词之间的空格数目痘相等，并尽可能的最大化该数目
// 如果不能重新平均分配所有空格，请将多余的空格放置在字符串末尾

/**
 * @param {string} text
 * @return {string}
 */

// 64ms
// 41.3MB
 var reorderSpaces = function(text) {
    const arr = text.replace(/\x20/g,"/ /").split("/")
    const strArr = []
    let ans = ""
    let i = 0
    let spaceNum = 0
    for(str of arr){
        if(str && str != " "){
            strArr.push(str)
        }else if(str == " "){
            spaceNum++
        }
    }
    if(strArr.length == 1){
        ans+=strArr[i]
        while(ans.length != text.length){
            ans+= " "
        }
        return ans
    }
    const spaceOnce = Math.floor(spaceNum / (strArr.length-1))
    while(ans.length != text.length){
        if(strArr[i]){
            ans+=strArr[i++]
        }
        for(let j = 0 ; j <spaceOnce &&  ans.length < text.length; j++){
            ans+= " "
        }
    }
    return ans
};

text = "  this   is  a sentence "
console.log(text)
console.log(reorderSpaces(text))