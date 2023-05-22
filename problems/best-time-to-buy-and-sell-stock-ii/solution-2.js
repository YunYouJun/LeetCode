/** 峰谷法
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let i = 0
  let valley = prices[0]
  let peak = prices[0]
  let maxProfit = 0
  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++
    valley = prices[i]
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) i++
    peak = prices[i]
    maxProfit += peak - valley
  }
  return maxProfit
}
