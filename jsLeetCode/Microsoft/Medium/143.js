// 重排链表
// 给定一个单链表L的头节点head,单链表L表示我
//  0 1 2 3 4 ... n
// 重排为 
// 0 n  1 n-1  2 n-2...  

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 844ms
// 48.7MB
 var reorderList = function (head) {
    const stack = []
    let leftNode = head
    let node = head.next
    if (!head.next) {
        return head
    }
    while (node) {
        const curNode = node
        node = node.next
        curNode.next = null
        stack.push(curNode)
    }
    // console.log(stack)
    while (stack.length) {
        node = stack.pop()
        leftNode.next = node
        leftNode = leftNode.next
        if (stack.length) {
            node = stack.shift()
            leftNode.next = node
            leftNode = leftNode.next
        }

    }
    return head
};

// 76ms
// 48.8Mb
// 快慢指针找到中点
// 反转后方链表
// 两链表拼接
var reorderList2 = function (head) {
    // 寻找中点
    let fast = head
    let slow = head
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    // pre为反转的
    let pre = null
    let curr = slow.next
    while(curr){
        const nextRemp = curr.next
        curr.next = pre
        pre = curr
        curr =nextRemp
    }

    // 开始合并
    let l1 = head
    let l2 = slow.next
    slow.next = null
    while(l1 && l2){
        l1Temp = l1.next
        l2Temp = l2.next

        l1.next = l2
        l1 = l1Temp

        l2.next = l1
        l1 = l2Temp
    }

    return head
};
