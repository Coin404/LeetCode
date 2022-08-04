// 合并两个有序链表
// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 60ms
// 43.4MB
 var mergeTwoLists = function(list1, list2) {
    // 新建节点
    const ans = new ListNode(-1)
    let pre = ans
    while(list1 != null && list2 != null){
        if(list1.val <= list2.val){
            pre.next = list1
            pre = pre.next
            list1 = list1.next
        }else{
            pre.next = list2
            pre = pre.next
            list2 = list2.next
        }
    }
    // 继承剩余的部分
    pre.next = list1== null? list2:list1
    return ans.next
};