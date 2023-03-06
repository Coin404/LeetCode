// 2038 如果相邻的两个颜色均相同则删除当前颜色
// 给定N个颜色片段，每个颜色片段要么是A 要么是B 给一个长度N的字符串colors

// 三个A，A可以删除，不能删除两端
// 三个B，B可以删除，不能删除两端
// A先手

/**
/ * @param {string} colors
/ * @return {boolean}
 */

//  72ms /  44.6
// 遍历数组，连续的n个A，增加n-2个操作数字，B同理
// 如果totalA比total大1则赢，否则输
// 遍历，设置一个pre记录之前的数值，如果pre相等，则统计++，不相等处理
// 同时更换pre
 var winnerOfGame = function(colors) {
    let pre = colors[0]
    let total = 1,totalA = 0,totalB = 0
    for(let i =1; i < colors.length;i++) {
        if(pre === colors[i]) {
            total ++
        } else {
            if( pre === 'A' && total -2 > 0) {
                totalA += total -2
            }
            else if(total-2 > 0){
                totalB += total -2
            }
            pre = colors[i]
            total = 1
        }
    }
    // 循环结束之后，需要判断最后的部分
    if(total > 2 ) {
        if(pre === 'A') {
            totalA += total -2
        } else {
            totalB += total -2
        }
    }
    if(totalA - totalB >= 1) {
        return true
    } else {
        return false
    }
};

// 官方写法 72 / 45
var winnerOfGame1 = function(colors) {
    const freq = [0, 0];
    let cur = 'C';
    let cnt = 0;
    for (let i = 0; i < colors.length; i++) {
        const c = colors[i];
        if (c !== cur) {
            cur = c;
            cnt = 1;
        } else {
            cnt += 1;
            if (cnt >= 3) {
                freq[cur==='A'?0:1] += 1;
            }
        }
    }            
    return freq[0] > freq[1];
};

