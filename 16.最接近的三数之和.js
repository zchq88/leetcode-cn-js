/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  // eslint-disable-next-line no-param-reassign
  nums = nums.sort((a, b) => a - b);
  // console.log(nums);
  let ret = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i += 1) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      // console.log(`${nums[i]}|${nums[start]}|${nums[end]}`);
      // console.log(`${ret} ${sum}`);
      ret = Math.abs(ret - target) > Math.abs(sum - target) ? sum : ret;
      // console.log(`${ret}`);
      if (sum > target) {
        end -= 1;
      } else {
        start += 1;
      }
    }
  }
  return ret;
};
// console.log(threeSumClosest([-1, 2, 1, -4], 1));
// console.log(threeSumClosest([-1, 2, 1, -2], 1));
// console.log(threeSumClosest([-1, 2, 1, -3, -4], 1));
