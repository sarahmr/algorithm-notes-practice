// ------------ Set Mismatch -------------------------------
// https://leetcode.com/problems/set-mismatch/


// brute force solution; O(n**2)
var findErrorNums = function(nums) {
  let answer = []
  let dupe = -1
  let missing = -1
  
  for (let i = 1; i <= nums.length; i++) {
      let count = 0
      for (let j = 0; j < nums.length; j++) {
          if (nums[j] === i) {
              count += 1
          }
      }
      if (count === 2) {
          dupe = i
      } else if (count === 0) {
          missing = i
      }
  }
  answer.push(dupe, missing)
  return answer
};

// alternate brute force solution; O(n**2)

var findErrorNums = function(nums) {
  let answer = []
  let dupe = -1
  let missing = -1
  
  for (let i = 1; i <= nums.length; i++) {
      let count = 0
      for (let j = 0; j < nums.length; j++) {
          if (nums[j] === i) {
              count += 1
          }
      }
      if (count === 2) {
          dupe = i
      } else if (count === 0) {
          missing = i
      }
      if (dupe > 0 &&  missing > 0) {
          break;
      }
  }
  answer.push(dupe, missing)
  return answer
};

// using sorting: O(n log n)

var findErrorNums = function(nums) {
  let dupe = -1
  let missing = 1
  let answers = []
  
  let sorted = nums.sort((a, b) => a - b)
  
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          dupe = nums[i]
      } else if (nums[i] > nums[i - 1] + 1) {
          missing = nums[i - 1] + 1
      }
  }
  answers.push(dupe, nums[nums.length - 1] !== nums.length ? nums.length : missing)
  return answers
};

// using map: O(n)

var findErrorNums = function(nums) {
  let dupe = -1
  let missing = 1
  let answers = []
  let countNums = {}
  
  for (let i = 0; i < nums.length; i++) {
      if (!countNums[nums[i]]) {
          countNums[nums[i]] = 1
      } else {
          countNums[nums[i]] += 1
      }
  }
  
  for (let i = 1; i <= nums.length; i++) {
      if (countNums[i]) {
          if (countNums[i] === 2) {
              dupe = i
          }
      } else {
          missing = i
      }
  }
  
  answers.push(dupe, missing)
  return answers
};