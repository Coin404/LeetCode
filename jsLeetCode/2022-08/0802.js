// 622 设计循环队列
// 设计你的循环队列。先进先出，并且队尾被连接在队手
// 支持操作
// MyCircularQueue(k): 构造器，设置队列长度为 k 。
// Front: 从队首获取元素。如果队列为空，返回 -1 。
// Rear: 获取队尾元素。如果队列为空，返回 -1 。
// enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
// deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
// isEmpty(): 检查循环队列是否为空。
// isFull(): 检查循环队列是否已满。

// 100ms
// 48.3MB
// 数组形式 （额外变量记录空，满  /  数组预留一位空格）
/**
 * @param {number} k
 */
// 创建循环队列
var MyCircularQueue = function (k) {
  this.arr = new Array(k + 1).fill(0);
  this.length = k + 1;
  this.tail = 0;
  this.head = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  // 插入元素，需要判断是否满了元素
  if (this.isFull()) {
    return false;
  }
  this.arr[this.tail++] = value;
  this.tail = this.tail % this.length;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  // 出队，空不能出队
  if (this.isEmpty()) {
    return false;
  }
  this.arr[this.head++];
  this.head = this.head % this.length;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  // 队首获取元素
  if (this.isEmpty()) {
    return -1;
  }
 
  return  this.arr[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) {
        return -1;
      }
    return this.arr[(this.tail - 1 +this.length)%this.length]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.tail == this.head
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return ((this.tail + 1) % this.length == this.head) 
};
