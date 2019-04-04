/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (68.46%)
 * Total Accepted:    18.3K
 * Total Submissions: 26.5K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const res = [];
  function gen(l, r, N, s) {
    if (l === N && r === N) {
      res.push(s);
    }
    if (l < n) {
      gen(l + 1, r, N, `${s}(`);
    }
    if (l > r && r < n) {
      gen(l, r + 1, N, `${s})`);
    }
  }
  gen(0, 0, n, '');
  return res;
};
