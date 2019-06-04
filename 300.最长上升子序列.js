/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  if (nums.length <= 1) return nums.length;
  const DP = [];
  for (let i = 0; i < nums.length; i += 1) {
    DP[i] = 1;
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        DP[i] = Math.max(DP[i], DP[j] + 1);
      }
    }
  }
  // console.log(DP);
  return Math.max(...DP);
};
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(lengthOfLIS([10, 11, 12]));
// console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
