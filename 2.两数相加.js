/* eslint-disable no-undef */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (32.59%)
 * Total Accepted:    85.8K
 * Total Submissions: 263.2K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let jw = 0;
  const retNode = new ListNode(0);
  let tempNode = retNode;
  let last = retNode;
  while (node1 || node2) {
    v1 = node1 ? node1.val : 0;
    v2 = node2 ? node2.val : 0;
    sum = v1 + v2 + jw;
    jw = sum > 9 ? 1 : 0;
    tempNode.val = sum % 10;
    tempNode.next = new ListNode(1);
    last = tempNode;
    tempNode = tempNode.next;
    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }
  last.next = jw === 1 ? last.next : null;
  return retNode;
};
