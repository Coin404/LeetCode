// 最小栈
// 设计一个支持 push pop top 操作，并且能再常数时间内检索到最小元素的栈 🌟
// 实现 MinStack 类:

// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。


// 144ms
// 51.4MB
var MinStack = function() {
    // 常数时间，建立两个栈，同时入栈
    // 栈内存当前的最小值
    this.stack = []
    this.min_stack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    const len = this.min_stack.length
    if(val < this.min_stack[len-1]){
        this.min_stack.push(val)
    }else{
        this.min_stack.push(this.min_stack[len-1])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length -1]
};