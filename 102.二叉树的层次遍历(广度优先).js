/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (53.39%)
 * Total Accepted:    21K
 * Total Submissions: 38.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其层次遍历结果：
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const levelOrder = function (root) {
  // 广度优先算法
  const res = [];
  if (root === null) {
    return res;
  }
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const LevelSize = queue.length;
    const Level = [];
    for (let i = 0; i < LevelSize; i += 1) {
      const Node = queue.shift();
      Level.push(Node.val);
      if (Node.left !== null)queue.push(Node.left);
      if (Node.right !== null)queue.push(Node.right);
    }
    res.push(Level);
  }
  return res;
};
