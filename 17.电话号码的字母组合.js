/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits === '') return [];
  const dict = [
    [''], [''], ['a', 'b', 'c'], ['d', 'e', 'f'],
    ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z'],
  ];
  return digits.split('').map(i => dict[i]).reduce((a, b) => (
    a.map(x => (b.map(y => (x + y)))).join(',').split(',')
  ));
};
// console.log(letterCombinations('939'));
