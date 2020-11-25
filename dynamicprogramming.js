// code and notes from dynamic programming video course by Andrey Grehov

/*
Problem: find the sum of the first N numbers

Objective: F(i) is the sum of the first i elements.

Recurrent relation: F(n) = F(n - 1) + n
*/

let nSum = (n) => {
  let dp = []

  // edge case of 0
  dp[0] = 0
 
  // populate dp array
  for (let i = 1; i <= n; i++) {
    dp.push(i)
  }
  
  // DP formula using solution to subproblems
  for (let i = 1; i < dp.length; i++) {
    dp[i] = dp[i - 1] + i
  }

  return dp[n]
}

// ------------------ climb stairs problem -------------------

/* 

Problem:
	Climbing Stairs
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can either climb 1 or 2 steps.
	In how many distinct ways can you climb to the top?
Framework for Solving DP Problems:
	1. Define the objective function
		f(i) is the number of distinct ways to reach the i-th stair.
	2. Identify base cases
		f(0) = 1
		f(1) = 1
	3. Write down a recurrence relation for the optimized objective function
		f(n) = f(n-1) + f(n-2)
	4. What's the order of execution?
		bottom-up
	5. Where to look for the answer?
		f(n)

*/


var climbStairs = function(n) {
  // make a dp array & populate it
  let dp = []
  dp.fill(0, 0, n)
  
  // edge cases
  dp[0] = 1
  dp[1] = 1
  
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};