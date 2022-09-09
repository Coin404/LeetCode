// 环形链表 2
// 给定一个链表的头节点head，返回链表开始入环的第一个节点。如果链表无环，则返回null
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快慢指针
// 76ms
// 44MB
var detectCycle = function (head) {
    let low = head
    let fast = head
    while (true) {
        if (!fast || !fast.next){
            return null
        }
        low = low.next
        fast = fast.next.next
        if (low == fast) {
            break
        }
    }
    fast = head
    while (fast != low) {
        low = low.next
        fast = fast.next
    }
    return fast
};