// 933 最近的请求次数
// 写一个RecentCpunter类来计算特定时间范围内最近的请求
// RecentCounter()初始化计数器，请求数为0
// int ping（int t）在时间t添加一个新的请求，其中t以毫秒为单位的某个时间
// 并返回过去3000ms内法上的所有请求数（）包括新请求，[t-3000,t]
// 保证每次ping的调用都使用比之前更大的t

// 180ms
var RecentCounter = function() {
    this.queue = []
    this.length = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    this.length++
    while(this.queue[0] < t-3000) {
        this.queue.shift()
        this.length--
    }
    return this.length
};

