//  875 爱吃香蕉的珂珂
//  n堆香蕉，第i堆中有 piles[i]根，警卫已经离开了，h小时后回来
//   速度K 可以决定，每一小时，选择一堆香蕉吃掉K，如果小于则吃完，但是不继续
// 返回可以h小时内吃完的最小速度K

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// 二分查找
 var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = 0;
    for(const pile of piles){
        high = Math.max(high,pile)
    }
    let k = high
    while(low < high){
        const speed = Math.floor((high-low)/2) + low
        const time = getTime(piles,speed)
        if(time <= h){
            k = speed
            high = speed
        } else{
            low = speed+1
        }
    }
    return k
};

const getTime = (piles,speed) =>{
    let time = 0
    for(let i=0;i<piles.length;i++){
        time+= Math.floor((piles[i]+speed-1) / speed)
    }
    return time;
}