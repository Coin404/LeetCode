// 删除排序链表中的重复元素
// 给定一个已排序的链表的头head，删除所有重复的元素，使每个元素只出现一次。
// 返回已排序的链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 60ms
// 43.2MB
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let pre = head;
  let cur = head.next;
  while (cur) {
    if (cur.val == pre.val) {
      cur = cur.next;
      pre.next = cur;
    } else {
      cur = cur.next;
      pre = pre.next;
    }
  }
  return head;
};
