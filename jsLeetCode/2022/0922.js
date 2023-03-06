// 16490 能否连接形成数组
// 给你一个整数数组arr,数组中的每个整数各不相同。
// 另有一个由整数数组构成的数组pieces，其中整数也互不相同
// 请以仁义顺序链接pieces中的数组形成arr
// 但是不允许对每个数组pieces[i]重的整数重新排序

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
// 因为数字各不相同，可以直接记录首数字进行排序
// 60ms
// 41.26MB
 var canFormArray = function(arr, pieces) {
    const map = new Map()
    for(let v of pieces){
        map.set(v[0],v)
    }
    for(let i=0 ; i< arr.length;){
        const cur = arr[i]
        // console.log(cur)
        if(map.get(cur)){
            const arrCur = map.get(cur)
            // console.log(arrCur)
            for(let j=0;j<arrCur.length;j++){
                if(arrCur[j] == arr[i]){
                    i++
                    // console.log(i)
                }else{
                    return false
                }
            }
        }else{
            return false
        }
    }
    return true
};

arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
console.log(canFormArray(arr,pieces))