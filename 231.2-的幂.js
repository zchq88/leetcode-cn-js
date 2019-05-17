/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  return (n > 0) && (n & -n) == n;
};
