/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (56.90%)
 * Total Accepted:    31.2K
 * Total Submissions: 53.4K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 *
 * 示例 1:
 *
 * 输入: [3,2,3]
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = {};
  let max = -1;
  let ret;
  for (let i = 0; i < nums.length; i += 1) {
    const x = nums[i];
    if (map[x] === undefined) {
      map[x] = 0;
    } else {
      map[x] += 1;
    }
    if (max < map[x]) {
      max = map[x]; ret = x;
    }
  }
  return ret;
};
