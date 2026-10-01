class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let profit = 0;
      let left = 0;
      let right = 1;
      while(right < prices.length) {
        let current_profit = prices[right] - prices[left];
        if(current_profit > profit) profit = current_profit;
        if(current_profit < 0) left = right;
        right++;
      }
      return profit;
    }
}