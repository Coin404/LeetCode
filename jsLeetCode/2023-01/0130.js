// 1669 合并两个链表
// 给两个链表list1 和 list2 包含元素为n 和 m 个
// 将list1中下标 a - b 的节点都删除，并将list2届上去



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let front,last
    let pos = 0
    let cur = list1
    while (pos<=b) {
        if(pos == a-1){
            front = cur
        }
        cur = cur.next
        if(pos == b){
            last = cur
        }
        pos++
    }
    front.next = list2
    while(front.next){
        front = front.next
    }
    front.next = last
    return list1
};