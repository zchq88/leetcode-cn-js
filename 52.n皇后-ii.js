/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (69.78%)
 * Total Accepted:    4.4K
 * Total Submissions: 6.2K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 *
 *
 * 上图为 8 皇后问题的一种解法。
 *
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 * [".Q..",  // 解法 1
 * "...Q",
 * "Q...",
 * "..Q."],
 *
 * ["..Q.",  // 解法 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function (n) {
  let res = 0;
  if (n < 1) return res;
  const cols = new Set();
  const pie = new Set();
  const na = new Set();
  const DFS = function (row) {
    if (row >= n) {
      res += 1;
    }
    for (let col = 0; col < n; col += 1) {
      // eslint-disable-next-line no-continue
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) continue;
      cols.add(col);
      pie.add(row + col);
      na.add(row - col);
      DFS(row + 1);
      cols.delete(col);
      pie.delete(row + col);
      na.delete(row - col);
    }
  };
  DFS(0, []);
  return res;
};
