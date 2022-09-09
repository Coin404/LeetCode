// 反转链表 2
// 给你单链表的头指针head 和两个整数left和right,其中left<=right
// 请你反转从位置left到位置right的链表节点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 56ms
// 41.5MB
// 遍历找到开始节点
// 一边往后一遍头插
var reverseBetween = function (head, left, right) {
  let cur = 1;
  let node = head;
  let leftNode = new ListNode(null, null);
  let rightNode = new ListNode(null, null);
  if (left == right) {
    return head;
  }
  while (node && cur <= right) {
    if (cur < left - 1) {
      node = node.next;
    } else if (cur == left - 1) {
      leftNode = node;
      rightNode = node.next;
      node = node.next;
    } else {
      // 当前节点头插到leftNode
      // console.log(node)
      const nextNode = node.next;
      node.next = leftNode.next;
      leftNode.next = node;
      node = nextNode;
    }
    cur++;
  }
  if (leftNode.val == null) {
    head.next = node
    head = leftNode.next;
    leftNode.next = null;
    delete leftNode;
    return head;
  }
  rightNode.next = node;
  return head;
};
