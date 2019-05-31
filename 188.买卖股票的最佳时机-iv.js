/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  if (prices.length <= 1 || k <= 0) return 0;
  if (prices.length / 2 <= k) {
    let maxP = 0;
    for (let i = 1; i < prices.length; i += 1) {
      if (prices[i] > prices[i - 1]) {
        maxP += (prices[i] - prices[i - 1]);
      }
    }
    return maxP;
  }
  const buyArr = new Array(k).fill(-Infinity);
  const sellArr = new Array(k).fill(0);
  for (let i = 0; i < prices.length; i += 1) {
    const p = prices[i];
    for (let j = 0; j < k; j += 1) {
      buyArr[j] = Math.max(buyArr[j], (j ? sellArr[j - 1] : 0) - p);
      sellArr[j] = Math.max(sellArr[j], buyArr[j] + p);
    }
  }
  return sellArr.pop();
};
// console.log(maxProfit(2, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
