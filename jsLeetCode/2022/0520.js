// 436 寻找右区间
// 给定一个区间数组intervals,其中intervals[i] = [starti,endi],且每个starti都不同
// 区间i的右侧区间可以记作区间j,并满足 startj > =endi,且starti最小化
// 返回由每一个区间i的右侧区间的最小起始位置组成的数组,如果不存在对应的右侧区间,设为-1


// 把所有的左区间取出来,排序
// 遍历数组,取出右区间,找到排序数组中第一个>=的

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */

// 788ms   二分 124ms
 var findRightInterval = function(intervals) {
    // const ans = []
    const sort  = []
    const len = intervals.length

    const ans = new Array(len).fill(0)
    for(let i = 0;i<len;i++){
        sort.push([intervals[i][0],i])
    }
    const newSort = sort.sort(function(a,b){
        return a[0]-b[0]
    })
    for(let i = 0;i<len;i++){
        let  right = intervals[i][1]
        //使用二分找找
        let low =0,high =len-1,target =-1
        // 从中找到最接近的
        while(low <= high){
            const mid = Math.floor((low+high)/2)
            if(newSort[mid][0] >= right){
                target = newSort[mid][1]
                high = mid -1
            } else{
                low = mid+1
            }
        } 
        ans[i] = target
        // for(let i = 0;i<len;i++){
        //     if(newSort[i][0]  >= right )
        //     {
        //         ans.push(newSort[i][1])
        //         break
        //     }
        //     if(i == len-1){
        //         ans.push(-1)
        //     }
        // }
    }
    return ans
};


const a =[[3,4],[2,3],[1,2]]
console.log(findRightInterval(a))

