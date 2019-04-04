/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (66.97%)
 * Total Accepted:    38K
 * Total Submissions: 55.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 *
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最大深度 3 。
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
const maxDepth = function (root) {
  // 广度优先算法
  let res = 0;
  if (root === null) {
    return res;
  }
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const LevelSize = queue.length;
    for (let i = 0; i < LevelSize; i += 1) {
      const Node = queue.shift();
      if (Node.left !== null)queue.push(Node.left);
      if (Node.right !== null)queue.push(Node.right);
    }
    res += 1;
  }
  return res;
};
