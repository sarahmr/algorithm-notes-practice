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
  dp.fill(0, 0, n + 1)
  
  // edge cases
  dp[0] = 1
  dp[1] = 1
  
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};

// space optimization of above

var climbStairs = function(n) {
  // array takes up a lot of space, instead track 3 variables
  let a = 1
  let b = 1
  let c = 0
  
  for (let i = 2; i <= n; i++) {
      c = a + b

      a = b
      b = c
  }

  return c
};

// variation; 3 steps; add f(n - 3) to recurrence function

var climbStairs = function(n) {
  // make a dp array & populate it
  let dp = []
  dp.fill(0, 0, n + 1)
  
  // edge cases
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2
  
  for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }

  return dp[n]
};

// variation; k steps
// change in recurrence function
// -- f(n - 1) + f(n - 2) + ... + f(n - k)

let climbStairs = (n, k) => {
  let dp = []
  dp.fill(0, 0, n + 1)

  // edge cases
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    // another loop here to go through until k
    for (let j = 1; j <= k; j++) {
      // i - j must be greater than 0
      if (i - j < 0) {
        continue
      }
      dp[i] += dp[i - j]
    }
  }

  return dp[n]
}

// optimize space for k steps

let climbStairs = (n, k) => {
  let dp = []
  dp.fill(0, 0, k)

  // edge cases
  dp[0] = 1

  for (let i = 1; i <= n; i++) {
    // another loop here to go through until k
    for (let j = 1; j < k; j++) {
      // i - j must be greater than 0
      if (i - j < 0) {
        continue
      }
      dp[i % k] += dp[(i - j) % k]
    }
  }

  return dp[n % k]
}

// last variation; skip certain stairs; array of bools, stairs

let climbStairs = (n, k, stairs) => {
  let dp = []
  dp.fill(0, 0, k)

  // edge cases
  dp[0] = 1

  for (let i = 1; i <= n; i++) {
    // another loop here to go through until k
    for (let j = 1; j < k; j++) {
      // i - j must be greater than 0
      if (i - j < 0) {
        continue
      }
      if (stairs[i - 1]) {
        dp[i % k] = 0
      } else {
        dp[i % k] += dp[(i - j) % k]
      }
    }
  }

  return dp[n % k]
}

// ---------- climbing stairs variation, cheapest path ------------

let cheapStairs = (n, price) => {
  let dp = []

  dp.fill(0, 0, n + 1)

  // base cases
  dp[0] = 0
  dp[1] = price[1]

  for (let i = 2; i <= n; i++) {
    // transition function:
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + price[i]
  }

  return dp[n]
}

// ------- variation from above where you return the path ------------

let cheapStairs = (n, price) => {
  let dp = []
  dp.fill(0, 0, n + 1)

  let lastLocation = []
  lastLocation.fill(0, 0, n + 1)

  // base cases
  dp[0] = 0
  dp[1] = price[1]

  for (let i = 2; i <= n; i++) {
    // transition function:
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + price[i]

    if (dp[i - 1] < dp[i - 2]) {
      lastLocation[i] = i - 1
    } else {
      lastLocation[i] = i - 2
    }
  }

  let path = []

  for (let curr = n; curr >= 0; curr = lastLocation[curr]) {
    path.push(curr)

    if (curr === 0) {
      break
    }
  }

  path.reverse()
  return path
}