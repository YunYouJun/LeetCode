class Solution:
    def maxProfit(self, prices: [int]) -> int:
        if prices:
            minPrice = prices[0]
        maxProfit = 0
        for price in prices:
            minPrice = min(minPrice, price)
            if price < minPrice:
                minPrice = price
            elif price - minPrice > maxProfit :
                maxProfit = price - minPrice
        return maxProfit