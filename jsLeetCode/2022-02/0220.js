//1比特与2比特字符  717 
//第一种字符 0   第二种字符（10 11）
//给一个以0结尾的二进制数组bits，如果最后一个字符必须是1位字符，返回true
/**
 * @param {number[]} bits
 * @return {boolean}
 */

//从前往后解码，0 10 11 分别代表  1 2 3 解码成数组，如果数组最后一位为1则为true
 var isOneBitCharacter = function(bits) {
    const arr = [];
    for(let i = 0; i < bits.length;i ++){
        if(bits[i]== 0)
        {
            arr.push(1);
        }
        else if(bits[++i] == 0){
            arr.push(2);
        }
        else{
            arr.push(3);
        }
    }
    console.log(arr);
    if(arr[arr.length-1]!= 1) return false;
    else return true;
};

//从前往后解码，甚至一个flag记录当前的是什么
var isOneBitCharacter2 = function(bits) {
    for(let i = 0; i < bits.length;i ++){
        if(bits[i]== 0)
        {
            flag = true;
        }
        else{
            ++i;
            flag = false;
        }
    }
    return flag;
};

//极致写法，bits[i]中的数字利用来遍历
var isOneBitCharacter = function(bits) {
    let i = 0, n = bits.length;
    while (i < n - 1) {
        i += bits[i] + 1;
    }
    return i === n - 1;
};
//思路进阶  倒序找到倒数第二个0，这中间所有的1为偶数，则0是自己 奇数则0是两字符
const arr = [1,0,0];
const answer = isOneBitCharacter2(arr);
console.log(answer);
