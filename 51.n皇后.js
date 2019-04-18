/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (58.80%)
 * Total Accepted:    6.4K
 * Total Submissions: 10.4K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 *
 *
 * 上图为 8 皇后问题的一种解法。
 *
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 *
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 *
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 *
 *
 */
/**
 * @param {number} n
 * @return {string[][]}
 */

const solveNQueens = function (n) {
  const res = [];
  if (n < 1) return res;
  const cols = new Set();
  const pie = new Set();
  const na = new Set();
  const DFS = function (row, state) {
    if (row >= n) {
      const answer = [];
      for (let i = 0; i < n; i += 1) {
        answer[i] = `${'.'.repeat(state[i])}Q${'.'.repeat(n - 1 - state[i])}`;
      }
      res.push(answer);
    }
    for (let col = 0; col < n; col += 1) {
      // eslint-disable-next-line no-continue
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) continue;
      cols.add(col);
      pie.add(row + col);
      na.add(row - col);
      // eslint-disable-next-line no-param-reassign
      state[row] = col;
      DFS(row + 1, state);
      cols.delete(col);
      pie.delete(row + col);
      na.delete(row - col);
    }
  };
  DFS(0, []);
  return res;
};
// console.log(solveNQueens(4));
