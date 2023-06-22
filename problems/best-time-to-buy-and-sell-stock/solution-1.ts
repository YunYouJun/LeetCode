export function maxProfit(prices: number[]): number {
  let max = 0

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]
    for (let j = i + 1; j < prices.length; j++) {
      const newPrice = prices[j]
      const delta = newPrice - price
      if (delta > max)
        max = delta
    }
  }

  return max
}
