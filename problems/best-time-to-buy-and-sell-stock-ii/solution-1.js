/** 暴力法（会超时）
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  return calculate(prices, 0)
}

function calculate(prices, s) {
  if (s >= prices.length) {
    return 0
  }
  let max = 0
  for (; s < prices.length; s++) {
    let maxProfit = 0
    for (let i = s + 1; i < prices.length; i++) {
      if (prices[s] < prices[i]) {
        let profit = calculate(prices, i + 1) + prices[i] - prices[s]
        maxProfit = Math.max(profit, maxProfit)
      }
    }
    max = Math.max(maxProfit, max)
  }
  return max
}