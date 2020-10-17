// --------------- remove duplicates from sorted array ------------------------------------

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

// --------------------------------- two sum -------------------------------------------------

// solution 1:
// time complexity O(n^2). For each element, we try to find its complement by looping through the rest of the array which takes O(n) time. Therefore, the time complexity is O(n^2)

let twoSum = function(nums, target) {
  let solution = []
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
      solution.push(i, j)
      }              
    }
  }
  return solution;
};

// solution 2:
// time complexity: O(n); traverse the list containing n elements twice; hash table reduces the look up time to O(1), it's O(n)

var twoSum = function(nums, target) {
  let hash = {}
  let solution = []
  
  for (i = 0; i < nums.length; i++){
    hash[nums[i]] = i
  }
  
  for (i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (hash.hasOwnProperty(complement) && hash[complement] !== i) {
      solution.push(i, hash[complement])
      return solution
    }
  }
  return solution;
};


// solution 3:
// time complexity: O(n); traverse the list once;

var twoSum = function(nums, target) {
  let hash = new Map()
  let solution = []
  
  for (i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (hash.has(complement)) {
      solution.push(hash.get(complement), i)
      return solution
    }
    hash.set(nums[i], i)
  }
  return solution;
};

// ------------------------ best time to buy and sell stock -------------------------------------------

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

// --------------------- rotate array ------------------------------

// brute force; time complexity: O(n x k)
let rotate = function(nums, k) {
  k %= nums.length
  let temp = 0
  let previous = 0

  for (i = 0; i < k; i++) {
    previous = nums[nums.length - 1]
    for (j = 0; j < nums.length; j++) {
      temp = nums[j]
      nums[j] = previous
      previous = temp
    }
  }
}

// approach with extra array; time complexity: O(n)
let rotate = function(nums, k) {
  let newNums = []
  
  for (i = 0; i < nums.length; i++) {
      newNums[(i + k) % nums.length] = nums[i]
  }
  
  for (i = 0; i < nums.length; i++) {
      nums[i] = newNums[i]
  }
};

// cyclic replacements time complexity: O(n)
let rotate = function(nums, k) {
  k = k % nums.length
  let count = 0
  
  for (let start = 0; count < nums.length; start++) {
    let current = start;
    let prev = nums[start]

    while (start != current) {
      let next = (current + k) % nums.length
      let temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
      count ++
    }
  }
}

// ------------------------------ 2D Array, find max sum of hourglass shape ------------------------------------------------
// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// solution:

function hourglassSum(arr) {
  let arrHourglass = []
  // find all hourglasses
  for (let i = 0; i < arr.length - 2; i++) {
      for (let j = 0; j < arr.length - 2; j++) {
          arrHourglass.push([
            arr[i][j], arr[i][j + 1], arr[i][j + 2], 
            arr[i+1][j+1], 
            arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]  
          ])
      }
  }

  // find all sums
  let sums = []
  for (let i = 0; i < arrHourglass.length; i++){
      let total = 0
      for (let j = 0; j < arrHourglass[i].length; j++) {
          total += arrHourglass[i][j]
      }
      sums.push(total)
  }

  // find max
  let max = sums[0]
  for (let i = 0; i < sums.length; i++){
      if (sums[i] > max) {
          max = sums[i]
      }
  }

  return max
}

// alternate solution

let sumForHourglass = (arr, row, col) => {
  if (row + 2 >= arr.length) {
    throw new Error ("row out of bounds")
  }

  if (col + 2 >= arr[0].length) {
    throw new Error ("col out of bounds")
  }

  return arr[row][col], arr[row][col + 1], arr[row][col + 2], 
  arr[row+1][col+1], 
  arr[row+2][col], arr[row+2][col+1], arr[row+2][col+2]  
}

let hourglassSum = (arr) => {
  let max = null

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      if (max === null) {
        max = sumForHourglass(arr, i, j);
        continue
      }
      let res = sumForHourglass(arr, i , j);
      if (res > max) {
        max = res
      }
    }
  }

  return max;
}

// ------------------------  Diagonal Difference  ------------------------------------------------------------------
// https://www.hackerrank.com/challenges/diagonal-difference/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

// solution

function diagonalDifference(arr) {
  // arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j+ 2] ... until adding n equaling length
  let sum1 = 0
  // arr[2][0] + arr[1][1] + arr[0][2]
  let sum2 = 0

  for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i][i]
      sum2 += arr[arr.length - (i + 1)][i]
  }

  let difference = Math.abs(sum1 - sum2)
  return difference
}