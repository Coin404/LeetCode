// 2351 第一个出现两次的字母
// 给你一个由小写英文字母组成的字符串s，请你找出并返回第一个出现两次的字母

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const arr = new Array(26).fill(0)
    for(let i = 0;i<s.length;i++){
        if(arr[s[i].charCodeAt() - 'a'.charCodeAt()]){
            return s[i]
        }else{
            arr[s[i].charCodeAt() - 'a'.charCodeAt()]=1
        }
    }
};

console.log(repeatedCharacter('acdscdsa'))