// 1823 绕圈游戏
// 给定人数和k，每次数k丢出去人，直到只剩一个
// 确定获胜者
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// 276ms  手写链表
function LinkedList() {
    function Node(val) {
        this.val = val
        this.next = null
    }
    var length = 0
    var head = new Node(null)
    var tail = head

    // 插入
    this.append = function (val) {
        var node = new Node(val)
        var current
        // 循环链表插入
        current = tail
        current.next = node
        node.next = head.next
        tail = current.next
        tail.next = head.next
        length++
    }
    this.getHead = function () {
        return head.next
    }
    this.getTail = function () {
        return tail
    }
    this.getLength = function () {
        return length
    }
    this.delLength = function () {
        length--
    }
}
var findTheWinner = function (n, k) {
    var L = new LinkedList()
    for (let i = 0; i < n; i++) {
        L.append(i + 1)
    }
    var p = L.getHead()
    // console.log(p)
    var pre = L.getTail()
    // console.log(pre)
    while (L.getLength() > 1) {
        let count = k
        while (count > 1) {
            p = p.next
            pre = pre.next
            count--
        }
        // 删除就是
        pre.next = p.next
        console.log(p)
        p = pre.next
        L.delLength()
    }
    return p.val
};
console.log(findTheWinner(6, 1))

// 循环进队，进行删除，不做展示


// 数学递归
// 胜利的人就是某次删除的起点
// 详情见 https://leetcode-cn.com/problems/find-the-winner-of-the-circular-game/solution/by-nehzil-xx6f/

// 状态转移方程递归
var findTheWinner = function(n, k) {
    if (n === 1) {
        return 1;
    }
    return (k + findTheWinner(n - 1, k) - 1) % n + 1;
};

// 迭代省调用栈空间
var findTheWinner = function(n, k) {
    let winner = 1;
    for (let i = 2; i <= n; i++) {
        winner = (k + winner - 1) % i + 1;
    }
    return winner;
};