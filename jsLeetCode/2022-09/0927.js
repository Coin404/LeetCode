// 判定是否互为字符重排
// 给定两个字符串s1和s2，请编写一个程序，确定确定其中一个字符串的字符重新排列后，能否变成另一个字符串
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 哈希表，遍历s1 ++ s2 --
// 遍历哈希表
// 60ms
// 40.9MB
 var CheckPermutation = function(s1, s2) {
    const map = new Map()
    for(let i=0;i<s1.length;i++){
        map.set(s1[i], map.get(s1[i])?map.get(s1[i])+1:1 )
    }
    for(let i=0;i<s2.length;i++){
        map.set(s2[i], map.get(s2[i])?map.get(s2[i])-1:-1)
    }
    for(let item of map.values()){
        if(item != 0){
            return false
        }
    }
    return true
};

s1 = "abc", s2 = "bad"
console.log(CheckPermutation(s1,s2))