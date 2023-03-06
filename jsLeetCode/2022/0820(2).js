// 单调栈解法
var constructMaximumBinaryTree = function(nums) {
    const n = nums.length;
    const stack = [];
    const tree = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        // 新建节点
        tree[i] = new TreeNode(nums[i]);
        // 栈内部有元素，并且当前大于栈顶元素
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            // 当前位置的左节点为之前数组中的最大值（小于当前节点）
            tree[i].left = tree[stack[stack.length - 1]];
            // 出栈
            stack.pop();
        }
        // 对于栈内元素来讲，当前节点就是他右侧的最大节点（不断更新ß）
        if (stack.length) {
            tree[stack[stack.length - 1]].right = tree[i];
        }
        stack.push(i);
    }
    return tree[stack[0]];
};