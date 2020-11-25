// --------------- remove duplicates from sorted array ------------------------------------

// returns number of unique elements
let removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  // compare indexes next to each other; shift when finding unique elements
  let i = 0;
  for (j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  // add 1 to end to get total length of unique elements as i is moving through indexes not counting
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

    while (start !== current) {
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

  return arr[row][col] + arr[row][col + 1] + arr[row][col + 2] + 
  arr[row+1][col+1] + 
  arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2]  
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

// -------------------- Matching Socks -----------------------------
// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, ar) {
  // less than 2 socks:
  if (n < 2) {
      return 0
  }
  // make an object that counts each color of sock
  // take each pair and divide value by 2, total pairs go up for each pair

  let totalPairs = 0
  let totalObject = {}

  for (let i = 0; i < ar.length; i++) {
      if (!totalObject[ar[i]]) {
          totalObject[ar[i]] = 1
      } else {
          totalObject[ar[i]] += 1
      }
  }

 // console.log(totalObject)

  for (let props in totalObject) {
      totalPairs += Math.floor(totalObject[props] / 2 )
  }

  return totalPairs
}

// ------------------- jumping clouds --------------------------
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

function jumpingOnClouds(c) {
  // count jumps
  // short paths take more 2 step jumps than 1 step
  // take two steps except if a thunderhead

  let jumps = 0

  // track the index of current cloud
  let i = 0
  let current = c[i]


  while (i > c.length - 1) {
      if (c[i + 2] === 0) {
          jumps += 1
          i += 2
          current = c[i + 2]
      }  else {
          jumps += 1
          i += 1
          current = c[i + 1]
      }
  }

  return jumps
}

// --------------------- rotate left -----------------------------------

// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(a, d) {
  let newArr = []

  for (let i = d; i < a.length; i++) {
      newArr.push(a[i])
  }

  if (newArr.length < a.length) {
      let i = 0
      while (newArr.length < a.length) {
          newArr.push(a[i])
          i++
      }
  }

  return newArr

}

// ---------------- largest subarray sum ----------------------------
function largestSubarraySum(arr) {
  // naive solution: find sums of all subarrays
  let max = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let sum = arr.slice(i, j).reduce((acc, cur) => {
        return acc + cur
      })
      if (sum > max) {
        max = sum
      }
    }
  }
  return max
}

var maxSubArray = function(nums) {
  let max = nums[0]
  let max_here = 0
  
  for (let i = 0; i < nums.length; i++){
      max_here += nums[i]
      if (max_here > max) {
          max = max_here
      } 
      if (max_here < 0) {
          max_here = 0
      }
  }
  return max
};

// -------------------- are there dupes? -------------------------------------
// O(n) time complexity

var containsDuplicate = function(nums) {
  let numsMap = {}
  
  for (let i = 0; i < nums.length; i++) {
      if (!numsMap[nums[i]]) {
          numsMap[nums[i]] = true
      } else {
          return true
      }
  }
  
  return false
};


// ------------------ find the single number in an array -----------------------------------

var singleNumber = function(nums) {
  if (nums.length === 1) {
      return nums[0]
  }
  
  let numsMap = {}
  
  for (let i = 0; i < nums.length; i++) {
      if (!numsMap[nums[i]]) {
          numsMap[nums[i]] = 1
      } else {
          numsMap[nums[i]] += 1
      }
  }
  
  for (let i = 0; i < nums.length; i++) {
      if (numsMap[nums[i]] === 1) {
          return nums[i]
      }
  }
};

// ---------------- duplicate zeros ----------------------------------

// brute force O(n*2)

var duplicateZeros = function(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
          for (let j = arr.length - 1; j >= i + 1; j--) {
              if (j + 1 > arr.length - 1) {
                  continue
              } else {
                  arr[j + 1] = arr[j]
              }
          }
          if (i < arr.length - 1) {
              arr[i + 1] = 0   
          }
          i = i + 1
      }
  }
  return arr
};

// O(n) -- two pass

var duplicateZeros = function(arr) {
  let possibleDupes = 0
  let length = arr.length - 1
  
  // find number of zeros to be duplicated; stop when length exceeds original array length
  for (let left = 0; left <= length - possibleDupes; left++) {
      // count zeros
      if (arr[left] === 0) {
          // edge case: zero can't be duplicated--no more space
          if (left === length - possibleDupes) {
              arr[length] = 0
              length -= 1
              break
          }
          possibleDupes += 1
      }
  }
  
  // start from the last index that will be in the modified array
  let last = length - possibleDupes
  
  for (let i = last; i >= 0; i--) {
      if (arr[i] === 0) {
          arr[i + possibleDupes] = 0
          possibleDupes -= 1
          arr[i + possibleDupes] = 0
      } else {
          arr[i + possibleDupes] = arr[i]
      }
  }
  return arr
};

// ------------ merge sorted arrays ----------------------------

var merge = function(nums1, m, nums2, n) {
  let end1 = m - 1
  let end2 = n - 1
  let totalLength = m + n - 1
  
  console.log(end1, end2, totalLength)
  
  while (end1 >= 0 && end2 >= 0) {
      if (nums1[end1] > nums2[end2]) {
          nums1[totalLength] = nums1[end1]
          end1 -= 1
          totalLength -= 1
      } else {
          nums1[totalLength] = nums2[end2]
          end2 -= 1
          totalLength -= 1
      }
      console.log(nums1)
  }
  
  while (end2 >= 0) {
      nums1[totalLength--] = nums2[end2--]
  }
  return nums1
};

// // nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// nums1 = [0] m = 0 nums2 = [1] n = 1