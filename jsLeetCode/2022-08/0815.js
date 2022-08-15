// 641 设计循环双端队列
// 实现MyCircularDeque类
// MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
// boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
// boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
// boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
// boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
// int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
// int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
// boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
// boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。

/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.queueDouble = []
    this.lenMax = k 
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.queueDouble.length < this.lenMax){
        this.queueDouble.unshift(value)
        return true
    }else {
        return false
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.queueDouble.length < this.lenMax){
        this.queueDouble.push(value)
        return true
    }else {
        return false
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.queueDouble.length > 0){
        this.queueDouble.shift()
        return true
    }else {
        return false
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.queueDouble.length > 0){
        this.queueDouble.pop()
        return true
    }else {
        return false
    }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.queueDouble.length >0){
        return this.queueDouble[0]
    }else{
        return -1
    }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.queueDouble.length >0){
        return this.queueDouble[this.queueDouble.length-1]
    }else{
        return -1
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.queueDouble.length == 0

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.queueDouble.length == this.lenMax

};