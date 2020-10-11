// remove duplicates from sorted array

// returns number of unique elements
let removeDuplicates = function(nums) {
  if (nums.length === 0) {
      return null;
  }
  // number of unique elements
  let i = 0;
  for (j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
};

// best time to buy and sell stock

// solution 1: brute force
class Solution {
  maxProfit = (prices) => {
    return this.calculate(prices, 0);
  }
  
  calculate = (prices, s) => {
    if (s >= prices.length) {
      return 0;
    }
    
    let max = 0;
    for (let start = s; start < prices.length; start++) {
      let maxprofit = 0;
      for (let i = start + 1; i < prices.length; i++) {
        if (prices[start] < prices[i]) {
          let profit = this.calculate(prices, i + 1) + prices[i] - prices[start];
          if (profit > maxprofit) {
            maxprofit = profit;
          }
        }
        if (maxprofit > max) {
          max = maxprofit;
        }
      }
    }
  return max;      
  }
}

let maxProfit = function(prices) {
  let solution = new Solution;
  return solution.maxProfit(prices)
}

