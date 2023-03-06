// 获取随机数，toFixed为四舍五入保留小数，0为保留整数，范围～1000
const getRandom = () => +(Math.random()*1000).toFixed(0);

const asyncTask = (taskID) => new Promise( (resolve) => {
    // 随机获取一次0~1000的随机数
    let timeout = getRandom();
    // 打印出传递进来的ID号 taskID=1 start.
    console.log(`taskID=${taskID} start.`);
    // 设置计时时间，function()等价于 () => {...}
    setTimeout(function() {
        // 打印出执行的taskID,和timeout
        console.log(`taskID=${taskID} finished in time=${timeout}.`);
        // 异步成功执行
        resolve(taskID)
    }, timeout);
});

Promise.all([asyncTask(1),asyncTask(2),asyncTask(3)])
.then(resultList => {
    console.log('results:',resultList);
});