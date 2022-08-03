// Excel表列名称
// 给定一个整数 columnNumber，返回他在Excel表中相对应的列名称

/**
 * @param {number} columnNumber
 * @return {string}
 */

// 26进制 先-1对上0
// 56ms
// 40.8MB
 var convertToTitle = function(columnNumber) {
    let arr = []
    let num = columnNumber
    // 取余操作
    while(num > 0){
        const remainder =  (num-1)%26
        num = Math.floor( (num - remainder) / 26)
        arr.unshift( String.fromCharCode( remainder + 'A'.charCodeAt()))
    }
    return arr.join("")
};