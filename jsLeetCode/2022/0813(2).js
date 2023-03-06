// 单调栈解法
// 64ms
// 43.4MB
var maxChunksToSorted = function(arr) {
    const stack = [];
    for (const num of arr) {
        // 栈空  或  该数大于等于栈内部的数字 可以切分
        if (stack.length === 0 || num >= stack[stack.length - 1]) {
            stack.push(num);
        } else {
            const mx = stack.pop();
            // ✨！！！
            // 新添加的数字小于原数组的最后一个块的最大值，必须融入原来的块
            // 如果它大于等于原数组的倒数第二个块的最大值，那么这个过程停止
            // 否则继续融入，直到遇到一个块，使得该块最大值小于或等于这个数，或者它融入了所有的块
            // 例如  444591
            // 到1的时候必须一直往前融入，直到出现新的块
            while (stack.length && stack[stack.length - 1] > num) {
                stack.pop();
            }
            // 记录之前块的最大值是多少
            stack.push(mx);
        }
        // console.log(stack)
    }
    return stack.length
};


const a = [4,5,7,8,1,3,9]
console.log(maxChunksToSorted(a))