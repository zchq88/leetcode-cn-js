/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  // eslint-disable-next-line no-param-reassign
  nums = nums.sort((a, b) => a - b);
  const ret = [];
  for (let j = 0; j < nums.length; j += 1) {
    for (let i = j + 1; i < nums.length; i += 1) {
      let start = i + 1;
      let end = nums.length - 1;
      while (start < end) {
        const sum = nums[j] + nums[i] + nums[start] + nums[end];
        if (sum === target) {
          ret.push([nums[j], nums[i], nums[start], nums[end]]);
          while (nums[start] === nums[start + 1]) start += 1;
          while (nums[end] === nums[end - 1])end -= 1;
        }
        if (sum > target) { end -= 1; } else { start += 1; }
      }
      while (nums[i] === nums[i + 1])i += 1;
    }
    while (nums[j] === nums[j + 1])j += 1;
  }
  return ret;
};
// console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
