/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const len = triangle.length;
  const t = triangle;
  for (let i = len - 2; i > -1; i -= 1) {
    for (let j = 0; j < t[i].length; j += 1) {
      t[i][j] = Math.min(
        t[i][j] + t[i + 1][j],
        t[i][j] + t[i + 1][j + 1],
      );
    }
  }
  return t[0][0];
};
// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
