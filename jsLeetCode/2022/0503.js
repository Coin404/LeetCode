// 937 重新排列日志文件
// 给定一个日志数组logs.每条日志都是以空格分隔的字符串，其第一个字为字母与数字混合的标识符。
// 有两种不同类型的日志：
// 字母日志：除标识符之外，所有字均有小写字母组成
// 数字日志：除标识符之外，所有字均有数字组成
// 重新排序:
// 所有的字母在数字之前
// 字母日志在内容不同时，忽略标识符之后，按内容字母顺序排序，在内容相同时，按标识符排序
// 数字日志保持相对顺序
/**
 * @param {string[]} logs
 * @return {string[]}
 */
// 官方解
 var reorderLogFiles = function(logs) {
    const length = logs.length
    const arr = new Array(length).fill(0)
    for(let i = 0 ; i < length ; i++) {
        arr[i] = [logs[i],i]
    }
    // 进行排序
    // 返回为真 a在后面
    arr.sort((a,b) => logCompare(a,b))
    const reordered = new Array(length).fill(0)
    for(let i = 0 ; i< length;i++){
        reordered[i] = arr[i][0]
    }
    return reordered
};

// 比较两个日志的大小
// 都是数字按照后面的比较，不是日志按照内容比较
const logCompare = (log1,log2) =>{
    const split1 = split(log1[0], " ");
    const split2 = split(log2[0], " ");
    const isDigit1 = isDigit(split1[1][0]);
    const isDigit2 = isDigit(split2[1][0]);
    // 如果都是数字的话，就按照原顺序返回
    if (isDigit1 && isDigit2) {
        return log1[1] - log2[1];
    }
    // 都不是数字的
    if (!isDigit1 && !isDigit2) {
        // 先比较后面的内容，再比较前面的内容
        const sc = compareTo(split1[1], split2[1]);
        if (sc !== 0) {
            return sc;
        }
        return compareTo(split1[0], split2[0]);
    }
    // 数字在前
    return isDigit1 ? 1 : -1;
}

// 判断是否是数字
const isDigit = (ch) =>{
    return parseFloat(ch).toString() === 'NaN' ? false: true;
}

// 处理日志内容，进行分割处理
const split = (str, separator)=>{
    const firstItem = str.split(separator)[0]
    const ret = [firstItem]
    const index = str.indexOf(" ")
    // split没有破坏原数组，从原数组中截出fistItem后面的内容
    ret.push(str.slice(index + 1,str.length))
    // console.log(ret)
    return ret
}

// 日志内容的比较
const compareTo = (left, right) => {
    // 先比较首字母
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
        if (left[i].charCodeAt() < right[i].charCodeAt()) {
            return -1;
        }
        if (left[i].charCodeAt() > right[i].charCodeAt()) {
            return 1;
        }
    }
    // 长度相同说明一致
    if (left.length === right.length) {
        return 0;
    }
    if (left.length > right.length) {
        return 1;
    }
    return -1;
}

const log = ["dig1 8 1 5 1","let1 art zero can","dig2 3 6","let2 own kit dig","let3 art zero"]
console.log(reorderLogFiles(log))



var reorderLogFiles = function (logs) {
    // 进行字母比较的数字地图
    const map = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
    let words = [];
    let numbers = []
    logs.forEach(item => {
        // 找到日志内容的开始
      let idx = item.indexOf(' ')
    //   如果日志内容存在，就进去words，否则进去数字队列
      if (map[item[idx + 1]]) {
        words.push([item, item.slice(idx + 1)])
      } else {
        numbers.push(item)
      }
    })
    // 比较函数
    function so (a, b) {
      let max = Math.max(a.length, b.length)
      for (let i = 0; i < max; i++) {
        //   如果A先undefined说明A在前面
        if (a[i] === undefined) {
          return -1
        } else if (b[i] === undefined) {
          return 1
        }
        if (a[i] !== b[i]) {
          if (a[i] === ' ') {
            return -1
          } else if (b[i] === ' ') {
            return 1
          } else if (map[a[i]] < map[b[i]]) {
            return -1
          } else {
            return 1
          }
        }
      }
    }
    // 排序函数
    function s (str1, str2) {
      let a = str1[1]
      let b = str2[1]
    //   如果相同就比较日志标识，不同就比较他们自身
      return a === b ? so(str1[0], str2[0]) : so(a, b)
    }
    words.sort(s)
    return words.map(item => item[0]).concat(numbers)
  };