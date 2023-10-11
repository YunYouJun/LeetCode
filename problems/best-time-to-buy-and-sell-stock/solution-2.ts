export function maxProfit(prices: number[]): number {
  let max = 0
  let minPrice = Number.POSITIVE_INFINITY
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]
    if (price < minPrice)
      minPrice = price
    else if (price - minPrice > max)
      max = price - minPrice
  }

  return max
}
