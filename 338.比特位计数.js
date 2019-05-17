/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */
/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
  const result = [0];
  for (let n = 1; n <= num; n++) {
    result[n] = result[n & (n - 1)] + 1;
  }
  return result;
};
