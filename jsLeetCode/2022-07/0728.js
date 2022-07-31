// 1331 数组序号转换
// 给定一个整数数组，将其每个元素替换为它们排序后的序号
// 大小一样序号一致


// 新数组排序
// 遍历哈希
// 原数组替换
/**
 * @param {number[]} arr
 * @return {number[]}
 */

// 168ms
// 58.6MB
 var arrayRankTransform = function(arr) {
    let newArr = [...arr]
    newArr = newArr.sort((a,b)=>{
        return a-b
    })
    let k = 1
    let cur = newArr[0]
    let map = new Map()
    map.set(newArr[0],k)
    for(let i = 0;i<newArr.length;i++){
        if(newArr[i] != cur){
            map.set(newArr[i],++k)
        }
        cur = newArr[i]
    }
    arr = arr.map((v)=>{
        return map.get(v)
    })
    return arr
};

arr = [100,100,100]
arrayRankTransform(arr)