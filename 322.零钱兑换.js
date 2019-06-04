/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const DP = [0];
  for (let i = 1; i <= amount; i += 1) {
    DP[i] = Infinity;
    for (let j = 0; j < coins.length; j += 1) {
      if (i - coins[j] >= 0) {
        DP[i] = Math.min(DP[i], DP[i - coins[j]] + 1);
      }
    }
  }
  // console.log(DP);
  return DP[amount] === Infinity ? -1 : DP[amount];
};
// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([4], 11));
