// 1450 在既定时间做作业的学生人数
// 给你两个整数数组 startTime(开始时间)和endTime(结束时间)，并给定一个整数queryTime[i]作为查询时间
// 已知，第i名学生在 startTime时正在做作业的学生人数
// 返回能够使quwryTime处于区间 startTime[i] 和 endTime[i]的学生人数


// 枚举  量小可以用，方法简单，不予考虑
// 差分数组 ， 建立一个数组来统计时刻的人

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
    const n = startTime.length
    // 查询时间大于最大结束时间
    const maxEndTime = _.max(endTime);
    if(queryTime > maxEndTime){
        return 0
    }

    //开始时间表示有一个人加入，结束时间表示有一个人离开，前缀和就是统计的人
    const cnt = new Array( maxEndTime + 2).fill(0)
    for(let i = 0; i< n;i++){
        cnt[startTime[i]]++
        cnt[endTime[i]+1]--
    }

    let ans = 0
    for(let i = 0; i <= queryTime;i++){
        ans+=cnt[i]
    }
    return ans
};