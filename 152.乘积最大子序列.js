/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let ret = nums[0];
  const n = new Array(nums.length);
  n[0] = { max: nums[0], min: nums[0] };
  for (let i = 1; i < n.length; i += 1) {
    if (nums[i] > 0) {
      n[i] = {
        max: Math.max(n[i - 1].max * nums[i], nums[i]),
        min: Math.min(n[i - 1].min * nums[i], nums[i]),
      };
    } else {
      n[i] = {
        max: Math.max(n[i - 1].min * nums[i], nums[i]),
        min: Math.min(n[i - 1].max * nums[i], nums[i]),
      };
    }
    // console.log(n);
    ret = Math.max(n[i].max, ret);
  }
  return ret;
};
// console.log(maxProduct([0, 2]));// 2
// console.log(maxProduct([2, -5, -2, -4, 3]));// 24
