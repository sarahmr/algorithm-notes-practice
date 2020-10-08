// two sum

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