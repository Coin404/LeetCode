// 课程表
// 你这学期必须选修 numCourses 门课程，记为 0 到 numCourses -1
// 在选修某些课程之前需要一些先修课程。先修课程按数组 prerequisites给出
// 其中 prerequistites[i] = [ai , bi]
// 表示如果要学习课程ai 必须 先学习 bi
// 请你完成能否完成所有课程的学习
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// 80ms
// 45.6MB
// 遍历数组，生成图，同时记得记录有几个入参
// 将入参为0 的点加入队列，出队，修改他出参，有新的0加入队列
// 若是所有点能遍历结束，说明可以完成
var canFinish = function (numCourses, prerequisites) {
  const arr = new Array(numCourses).fill(0).map((item) => {
    return { out: [], need: 0, isStudy: 0 };
  });
  const queue = [];
  //   处理成信息图
  for (let i = 0; i < prerequisites.length; i++) {
    arr[prerequisites[i][1]].out.push(prerequisites[i][0]);
    arr[prerequisites[i][0]].need++;
  }
  //   遍历图开始标记完成
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].need == 0) {
      queue.push(arr[i]);
    }
  }
  //   开始把队列中的课程全部学习
  while (queue.length) {
    const course = queue.shift()
    course.isStudy =1
    while(course.out.length){
        const canStudy = course.out.shift()
        arr[canStudy].need -= 1
        if(arr[canStudy].need == 0){
            queue.push(arr[canStudy])
        }
    }
  }
  for(let i=0;i<arr.length;i++){
    if(arr[i].isStudy == 0){
        return false
    }
  }
  return true
};

(numCourses = 2), (prerequisites = [[1, 0]]);
canFinish(numCourses, prerequisites);


// 拓扑排序，也可以用深度优先遍历，看看有没有环路，如果没有环路，那么就可以实现
// 重点在于，构造一个图，用于遍历