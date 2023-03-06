// 768 最多能完成排序的块 2
// 困难✨
// 给定的元素可以重复，输入数组的最大长度为2000，其中的元素最大为10**8
// arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个块，并将这些块分别排序，之后再连接起来
// 使得连接的结果和按升序排列后与原数组相同



/**
 * @param {number[]} arr
 * @return {number}
 */

// 排序后与原数组进行对比，计算频度，如果频度全是0
// 那么这个位置就是切分的位置
// 哈希表
// 60ms
// 44.1MB
 var maxChunksToSorted = function(arr) {
    let ans = 0
    const cnt = new Map()
    const sortArr = [...arr]
    sortArr.sort((a,b)=>{
        return a-b
    })
    for(let i=0;i<sortArr.length;i++){
        const x = arr[i]
        const y = sortArr[i]
        // 原数组+1
        // 新数组-1
        cnt.set(x,(cnt.get(x)||0)+1)
        if(cnt.get(x) == 0){
            cnt.delete(x)
        }
        cnt.set(y,(cnt.get(y)||0)-1)
        if(cnt.get(y) == 0){
            cnt.delete(y)
        }
        if(cnt.size == 0){
            ans++
        }
    }
    return ans
};

const a = [1,4,5,7,8,19,13,13,20]
console.log(maxChunksToSorted(a))