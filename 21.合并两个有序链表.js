/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.53%)
 * Total Accepted:    44.3K
 * Total Submissions: 84.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
/**
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function array2node(arr) {
  let ret = null;
  let temp;
  // eslint-disable-next-line no-restricted-syntax
  for (const val of arr) {
    if (ret !== null) {
      temp.next = new ListNode(val);
      temp = temp.next;
    } else {
      ret = new ListNode(val);
      temp = ret;
    }
  }
  return ret;
}

const l1 = array2node([1, 3, 6]);
const l2 = array2node([2, 4, 5]);
console.log(l1);
console.log(l2);
console.log('----------------------------------------');
//  */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// eslint-disable-next-line no-shadow
const mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val >= l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
  l1.next = mergeTwoLists(l1.next, l2);
  return l1;
};
/*
console.log(mergeTwoLists(l1, l2));
// */
