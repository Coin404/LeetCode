// 761 特殊的二进制序列
// 具有以下两个性质的二进制序列：
// 0 的数量与 1 的数量相等
// 二进制序列的每一个前缀码中1的数量要大于0的数量
// 给定一个特殊的二进制序列s，以字符串形式表示。
// 定义一个操作为首先选择S 的两个连续非空的特殊字串，然后将它们交换
// 两个字串为连续的当且仅当第一个子串的最后一个字符恰好为第二个字串的第一个字符的前一个字符
// 在任意次数的操作之后，交换后的字符串按照字典序列排序的最大结果是什么


/**
 * @param {string} s
 * @return {string}
 */
// 要切分成两个特殊的字串，首位的1 和末尾的0 无法存在在特殊的字串中
// 52ms
// 41.4MB
// 原字符串一定可以分为不可再分的特殊字符串若干
// 每一个不可再分的特殊字符串处理结束一定是 1+ 中间+0
// 处理递归进行，终止于长度0
// 把这些字符串从大到小排列就是答案
 var makeLargestSpecial = function(s) {
    if(s.length <= 2){
        return s
    }
    let count = 0,left = 0;
    const subs = []
    for(let i = 0;i<s.length;i++){
        if(s[i] == '1'){
            ++count
        }else{
            --count
            if(count === 0 ){
                subs.push("1" + makeLargestSpecial(s.substring(left + 1, i)) + '0')
                left = i +1
            }
        }
    }
    subs.sort().reverse();
    return subs.join('');
};