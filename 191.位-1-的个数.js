/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let count = 0;
  while (n) {
    count += 1;
    n &= n - 1;
  }
  return count;
};
// console.log(hammingWeight(000000000000000000101111));
