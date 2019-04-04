/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (37.02%)
 * Total Accepted:    14.1K
 * Total Submissions: 37.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 *
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最小深度  2.
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
 * @return {number}
 */
const minDepth = function (root) {
  let res = 0;
  if (root === null) { return res; }
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const LevelSize = queue.length;
    res += 1;
    for (let i = 0; i < LevelSize; i += 1) {
      const Node = queue.shift();
      if (Node.right === null && Node.left === null) return res;
      if (Node.left !== null)queue.push(Node.left);
      if (Node.right !== null)queue.push(Node.right);
    }
  }
  return res;
};
