/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  // eslint-disable-next-line no-bitwise
  return ~~(Math.sqrt(x));
};
