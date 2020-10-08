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