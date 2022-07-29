// 953 验证外星语词典
// 英文小写字母，但可能顺序order不同。字母表的顺序（order）是一些小写字母的排列
// 给定一组外星语的单词words，以及字母表的顺序order，符合顺序返回true

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

// 双循环暴力  64ms
 var isAlienSorted = function(words, order) {
    // 字母code来做哈希  charCodeAt
    const arr = new Array(26).fill(0)
    for(let i=0;i<order.length;i++){
        arr[order[i].charCodeAt() - 'a'.charCodeAt()] = i
    }

    for(let i=1;i<words.length;i++){
        let valid = false;
        for(let j=0;j < words[i-1].length && j < words[i].length;j++){
            let prev = arr[words[i-1][j].charCodeAt() - 'a'.charCodeAt()]
            let curr = arr[words[i][j].charCodeAt() - 'a'.charCodeAt()]
            if(prev < curr){
                valid = true
                break
            } else if(prev > curr){
                return false
            }
        }
        // 通过校验，判断长度
        if(!valid){
            if(words[i-1].length > words[i].length){
                return false
            }
        }
    }
    return true
};

const words =["apap","app"]

const order = "abcdefghijklmnopqrstuvwxyz"
console.log(isAlienSorted(words,order))