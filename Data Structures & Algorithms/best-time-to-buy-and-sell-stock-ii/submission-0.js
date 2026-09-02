class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let i = 0;
      let total_profit = 0;
      while (i < prices.length) {
        if(prices[i + 1] > prices[i]) {
          total_profit += prices[i+1] - prices[i];
        }
        i++;
      }
      return total_profit;
    }
}