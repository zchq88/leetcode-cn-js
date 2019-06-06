/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const DP = [[0]];
  for (let j = 1; j <= word2.length; j += 1) {
    DP[0][j] = j;
  }
  for (let i = 1; i <= word1.length; i += 1) {
    DP[i] = [i];
    for (let j = 1; j <= word2.length; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        DP[i][j] = DP[i - 1][j - 1];
      } else {
        DP[i][j] = Math.min(DP[i - 1][j], DP[i][j - 1], DP[i - 1][j - 1]) + 1;
      }
    }
  }
  // console.log(DP);
  return DP.pop().pop();
};
// console.log(minDistance('abac', 'abac'));
// console.log(minDistance('horse', 'ros'));
// console.log(minDistance('cuti', 'execution'));
